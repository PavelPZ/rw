﻿import { Action, createStore, applyMiddleware } from 'redux';
import { blockGuiReducerFnc, TDispatch, Reducer, TMiddlewareAPI, Middleware, TMiddleware, store, setStore, getActState, changeBlockCouterState } from 'rw-redux';

export enum RecordingStatus { no, recording, recorded, playing, cancelPlaying }

export interface IRecording {
  status?: RecordingStatus;
  appState?: {};
  actions?: Array<Action>;
  actIdx?: number;
  //in playlist
  title?: string;
  isSelected?: boolean; //selected for playing
}

export let recordingHook = {
  currentRecording: null as IRecording,
  resolve: null as (res: boolean) => void,
};

export const asyncMiddleware: Middleware<Action> = middlAPI => next => (act: IAsyncActionHelper) => {
  if (act.$asyncEnd) { next(act); return; } //action is async.promise result => don't record
  if (recordingHook.currentRecording && recordingHook.currentRecording.status == RecordingStatus.recording) pushActions(act); //recording => record action
  next(act);
  if (act.$asyncStart) { //some reducer called makeAsync() proc
    const $asyncStart = act.$asyncStart; delete act.$asyncStart; //remove temporaty data
    Promise.all($asyncStart).then(actions => {
      changeBlockCouterState(middlAPI.getState(), false); //block gui END
      let dispatched = false;
      actions.forEach(act => {
        if (!act) return;
        dispatched = true;
        act.$asyncEnd = true; //priznak: vysledek async akce
        middlAPI.dispatch(act); //must be SYNC action
      });
      if (!dispatched) middlAPI.dispatch({ type: '', $asyncEnd: true } as IAsyncActionHelper); //fake dispatch: chance to blockGui component re-render etc.
      playActionsContinue(); //for isPlaying: chance to continue action playing
    });
  } else
    playActionsContinue(); //for isPlaying: chance to continue action playing
}

//Mark action as async
export const makeAsync = (act: Action, promise: Promise<Action>) => {
  const asyncAct = act as IAsyncActionHelper;
  if (!asyncAct.$asyncStart) {
    changeBlockCouterState(store.getState(), true); //block gui START
    asyncAct.$asyncStart = [];
  }
  asyncAct.$asyncStart.push(promise);
};

interface IAsyncActionHelper extends Action {
  $asyncStart?: Array<Promise<IAsyncActionHelper>>; //sance pro async akci naplnit promise
  $asyncEnd?: boolean;
}

export function playActionsStart(): Promise<boolean> {
  const cr = recordingHook.currentRecording;
  if (!cr || !cr.actions || cr.actions.length == 0) return Promise.resolve(true);
  recordingHook.currentRecording.actIdx = 0;
  return new Promise((resolve, reject) => {
    recordingHook.resolve = res => resolve(res);
    playActionsContinue();
  });
}

const pushActions = (act: Action) => recordingHook.currentRecording.actions.push(act);

const playActionsContinue = () => {
  if (!recordingHook.currentRecording || recordingHook.currentRecording.status != RecordingStatus.playing) return;
  const cr = recordingHook.currentRecording;
  if (cr.actIdx >= cr.actions.length) { recordingHook.resolve(true); delete recordingHook.resolve; return; } //playing finished
  let nextAction = cr.actions[cr.actIdx]; cr.actIdx++;
  setTimeout(() => store.dispatch(nextAction), 200);
};

//********************** TEST

interface ITestState {
  testLog: Array<string>;
}

export function init() {
  const middlewares = applyMiddleware.apply({}, [asyncMiddleware]);
  setStore(createStore(rootReducer, { blockGui: { counter: 0 } }, middlewares));
  recordingHook.currentRecording = { actions: [], actIdx: 0, status: RecordingStatus.recording };
  store.dispatch({ type: 'ANY' });
  store.dispatch({ type: 'START' });
  setTimeout(() => {
    store.dispatch({ type: 'ANY' });
    setTimeout(() => {
      store.dispatch({ type: 'ANY' });
      store.dispatch({ type: 'START' });
      setTimeout(() => {
        store.dispatch({ type: 'ANY' });
        setTimeout(() => {
          const log = getActState()['test'].testLog.join(',');
          recordingHook.currentRecording.status = RecordingStatus.playing;
          setStore(createStore(rootReducer, { blockGui: { counter: 0 } }, middlewares));
          playActionsStart().then(() => {
            const newLog = getActState()['test'].testLog.join(',');
            alert(log == newLog ? 'OK' : log + '\r\n' + newLog);
          });
        }, 600);
      }, 300);
    }, 600)
  }, 300);
}

const testReducer: Reducer<ITestState, Action & { result: string }> = (state, action) => {
  if (!state) return { testLog: [] };
  switch (action.type) {
    case 'START':
      makeAsync(action, new Promise<Action & { result: string }>((resolve, reject) => {
        setTimeout(() => {
          resolve({ type: 'END', result: '** ASYNC END **' });
          //resolve({ type: 'END' });
        }, 200);
      })
      );
      console.log('START');
      return { testLog: [...state.testLog, `START ${getActState().blockGui.counter.toString()}`] };
    case 'END':
      console.log('END');
      return { testLog: [...state.testLog, `END ${action.result ? action.result : 'no result'} ${getActState().blockGui.counter.toString()}`] };
    case 'ANY':
      console.log('ANY');
      return { testLog: [...state.testLog, 'ANY'] };
    default:
      return state;
  }
};

const testReducerFnc = (state: any, action: any): any => {
  return {
    test: testReducer(state.test, action)
  }
}

const rootReducer = (state: DRedux.IRootState, action: any): DRedux.IRootState => {
  return {
    ...blockGuiReducerFnc(state, action),
    ...testReducerFnc(state, action),
  };
}
