import { Action, createStore, applyMiddleware } from 'redux';
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

//export interface IAsyncFlagAction extends Action { asyncFlag: string }

//export interface IAsyncEndAction extends IAsyncFlagAction { asyncFlag: '@asyncFlagEnd', asyncResult?: any; }
//export const asyncFlagEnd = '@asyncFlagEnd';
//export const asyncActionEndProto: IAsyncEndAction = { type: null, asyncFlag: asyncFlagEnd };

//export interface IAsyncStartAction extends IAsyncFlagAction { asyncFlag: '@asyncFlagStart' }
//export const asyncFlagStart = '@asyncFlagStart';
//export const asyncActionStartProto: IAsyncStartAction = { type: null, asyncFlag: asyncFlagStart };

const isPlaying = () => recordingHook.currentRecording && recordingHook.currentRecording.status == RecordingStatus.playing;
const isRecording = () => recordingHook.currentRecording && recordingHook.currentRecording.status == RecordingStatus.recording;

//export function onAsyncStart(action: IAsyncStartAction, endType: string | IAsyncEndAction, asyncProc: Promise<any>) {
//if (action.asyncFlag != asyncFlagStart) throw new Error('action.asyncFlag != asyncFlagStart');
//asyncProc.then(res => {
//  const end: IAsyncEndAction = typeof endType == 'string' ? { ...asyncActionEndProto, type: endType } : endType;
//  end.asyncResult = res;
//  if (isPlaying()) playActionsContinue(end); /* 5 */
//  else store.dispatch(end);
//});
//}

export const asyncMiddleware: Middleware<Action> = middlAPI => next => (act: IAsyncActionHelper) => {
  if (act.$asyncEnd) { next(act); return; } //async completed action (async promise result) => don't record
  if (isRecording()) pushActions(act); //recording => record action
  next(act);
  if (act.$asyncStart) { //some reducer called makeAsync() proc
    changeBlockCouterState(middlAPI.getState(), false);
    const $asyncStart = act.$asyncStart; delete act.$asyncStart; //remove temporaty data
    Promise.all($asyncStart).then(actions => {
      let dispatched = false;
      actions.forEach(act => {
        if (!act) return;
        dispatched = true;
        if (!act.$asyncEnd) act.$asyncEnd = true; //priznak: vysledek async akce
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
  changeBlockCouterState(store.getState(), true);
  if (!asyncAct.$asyncStart) asyncAct.$asyncStart = [];
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
  if (!isPlaying()) return;
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
