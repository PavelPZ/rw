import { Action, createStore, applyMiddleware } from 'redux';
import { TDispatch, Reducer, TMiddlewareAPI, Middleware, TMiddleware, store, setStore } from 'rw-redux';

export interface IAsyncEndAction extends Action {
  asyncFlag: '@asyncFlag',
  noBlockGui?: boolean;
  asyncResult?: any;
}
const asyncFlag = '@asyncFlag';

export function onAsyncStart<TAsyncResult, TEnd extends IAsyncEndAction>(asyncProc: Promise<TAsyncResult>, end: TEnd, noBlockGui?: boolean): DRedux.IRootState {
  asyncProc.then(res => {
    end.asyncResult = res;
    end.noBlockGui = noBlockGui;
    if (recordingHook.isPlaying) playActionsContinue(res, end); /* 5 */
    else store.dispatch(end);
  });
  let st = store.getState() as DRedux.IRootState;
  return noBlockGui ? st : { ...st, blockGui: { counter: st.blockGui.counter + 1 } };
}

export const onAsyncEnd = (action: IAsyncEndAction): DRedux.IRootState => {
  let st = store.getState() as DRedux.IRootState;
  return action.noBlockGui ? st : { ...st, blockGui: { counter: st.blockGui.counter - 1 } };
}

export let recordingHook = {
  isRecording: false,
  isPlaying: false,
};

export const asyncMiddleware: Middleware<Action> = middlAPI => next => act => {
  next(act);
  if (recordingHook.isRecording) pushActions(act);
}

interface IRecordingGlob {
  actions: Array<Action>;
  actIdx: number;
  resolve: (res: boolean) => void;
}
const recordingGlob: IRecordingGlob = { actions: [], actIdx: 0, resolve: null };

export function playActionsStart(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    recordingGlob.resolve = res => resolve(res);
    playActionsContinue();
  });
}

const pushActions = (act: Action) => recordingGlob.actions.push(act);

const playActionsContinue = (asyncResult?: any, endAction?: IAsyncEndAction) => {
  if (recordingGlob.actIdx >= recordingGlob.actions.length) { recordingGlob.resolve(true); return; } //playing finished
  let nextAction = recordingGlob.actions[recordingGlob.actIdx];
  if (!endAction && (nextAction as IAsyncEndAction).asyncFlag == asyncFlag) return; /* 4 */ //next action is asyncEnd action. Wait for async action completed
  recordingGlob.actIdx++; //increase action pointer
  if (endAction && endAction.type != nextAction.type) throw new Error('endAction.type != nextAction.type'); //end action check
  setTimeout(() => {
    store.dispatch(endAction ? endAction : nextAction); /* 1. !endAction => AsyncStart, 6. endAction => AsyncEnd */
    playActionsContinue(); /* 3. nextAction is IAsyncEndAction */
  }, 1);
};

//********************** TEST

interface ITestState extends DRedux.IRootState {
  log: Array<string>;
}

export function init() {
  const middlewares = applyMiddleware.apply({}, [asyncMiddleware]);
  setStore(createStore(testReducer, middlewares));
  recordingHook.isRecording = true;
  store.dispatch({ type: 'ANY' });
  store.dispatch({ type: 'START' });
  store.dispatch({ type: 'ANY' });
  setTimeout(() => {
    store.dispatch({ type: 'ANY' });
    store.dispatch({ type: 'START' });
    store.dispatch({ type: 'ANY' });
    setTimeout(() => {
      const log = (store.getState() as ITestState).log.join(',');
      recordingHook.isRecording = false; recordingHook.isPlaying = true;
      setStore(createStore(testReducer, middlewares));
      playActionsStart().then(() => {
        const newLog = (store.getState() as ITestState).log.join(',');
        alert(log === newLog);
      });
    }, 300);
  }, 300)
}

const testReducer: Reducer<ITestState, Action> = (state, action) => {
  if (!state) return { log: [], blockGui: { counter: 0 } };
  switch (action.type) {
    case 'START':
      const st = <ITestState>onAsyncStart(new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('async-data');
        }, 200);
        //}), { type: 'END', asyncFlag: asyncFlag }, true); /* 2 */
      }), { type: 'END', asyncFlag: asyncFlag }); /* 2 */
      st.log.push(`START - ${st.blockGui.counter.toString()}`);
      return st;
    case 'END':
      const act = action as IAsyncEndAction;
      const st2 = <ITestState>onAsyncEnd(act);
      st2.log.push(`END - ${act.asyncResult} - ${st2.blockGui.counter.toString()}`);
      return st2;
    case 'ANY':
      return { ...state, log: [...state.log, 'ANY'] };
    default:
      return state;
  }
};

