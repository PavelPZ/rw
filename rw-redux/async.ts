import { Action, createStore, applyMiddleware } from 'redux';
import { blockGuiReducerFnc, TDispatch, Reducer, TMiddlewareAPI, Middleware, TMiddleware, store, setStore, getActState } from 'rw-redux';
import { BATCH, BatchAction } from 'redux-batched-actions';

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

export const toActions = (src: Array<TAsyncActionPromise>) => {
  let actions: Array<Action> = [];
  if (!src) return Promise.resolve(actions);
  const promises = [];
  //actions
  src.forEach(act => {
    if (!act) return;
    if (isPromise(act)) promises.push(act);
    else if (isArray(act)) actions = actions.concat(act);
    else actions.push(act);
  });
  if (promises.length == 0) return Promise.resolve(actions);
  //promises
  return Promise.all<TAsyncActions>(promises).then(res => {
    res.forEach(act => {
      if (!act) return;
      if (isArray(act)) actions = actions.concat(act); else actions.push(act);
    });
    return actions;
  });
};

export const asyncMiddleware: Middleware<Action> = middlAPI => next => (act: IAsyncActionHelper) => {
  if (act.$asyncEnd) { next(act); return; } //action is async.promise result => don't record
  if (recordingHook.currentRecording && recordingHook.currentRecording.status == RecordingStatus.recording) pushActions(act); //recording => record action
  next(act);
  if (act.$asyncStart) { //some reducer called makeAsync() proc
    const asyncStart = act.$asyncStart; delete act.$asyncStart; //remove temporaty data
    toActions(asyncStart).then(actions => {
      changeBlockCouterState(middlAPI.dispatch, false); //block gui END
      //force action: chance to blockGui component re-render etc.
      if (actions.length == 0) actions.push({ type: '' });
      //single or batch action
      if (actions.length == 1) { (actions[0] as IAsyncActionHelper).$asyncEnd = true; middlAPI.dispatch(actions[0]); }
      else middlAPI.dispatch({ type: BATCH, payload: actions.reverse(), $asyncEnd: true } as BatchAction);
      playActionsContinue(); //for isPlaying: chance to continue action playing
    });
  } else
    playActionsContinue(); //for isPlaying: chance to continue action playing
}

//Mark action as async
export const makeAsync = (act: Action, promise: TAsyncActionPromise) => {
  const asyncAct = act as IAsyncActionHelper;
  if (!asyncAct.$asyncStart) {
    //changeBlockCouterState(store.getState(), true); //block gui START
    asyncAct.$asyncStart = [];
  }
  asyncAct.$asyncStart.push(promise);
};

export type TAsyncActions = Action | Array<Action>;
export type TAsyncActionPromise = Promise<Action> | Promise<Array<Action>> | TAsyncActions;

function isPromise(arg: any): arg is Promise<Action> | Promise<Array<Action>> { return arg && typeof arg.then === 'function'; }
function isArray(arg: any): arg is Array<any> { return arg && arg instanceof Array }

interface IAsyncActionHelper extends Action {
  $asyncStart?: Array<TAsyncActionPromise>; //sance pro async akci naplnit promise
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

export const ASYNC_START = 'ASYNC_START'; export const ASYNC_END = 'ASYNC_END';
const changeBlockCouterState = (state: DRedux.IRootState, increase: boolean) => {
  if (!state.blockGui) return;
  if (increase) state.blockGui.counter++; else state.blockGui.counter--;
};

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

const actions: Array<Action> = [];

const modifiedRootReducer = enableBatching(rootReducer);

export function enableBatching(reduce) {
  return function batchingReducer(state, action) {
    switch (action.type) {
      case 'BATCH':
        //for init value (state) call state = batchingReducer(state, actions[i]) and return last assigned state
        return action.payload.reduce(batchingReducer, state);
      default:
        return reduce(state, action);
    }
  }
}