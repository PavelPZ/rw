import { Action, createStore, applyMiddleware } from 'redux';
import { TDispatch, Reducer, TMiddlewareAPI, Middleware, TMiddleware, store, setStore, blockGuiReducerFnc, getActState } from 'rw-redux';

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

export interface IAsyncFlagAction extends Action { asyncFlag: string }

export interface IAsyncEndAction extends IAsyncFlagAction { asyncFlag: '@asyncFlagEnd', asyncResult?: any; }
export const asyncFlagEnd = '@asyncFlagEnd';
export const asyncActionEndProto: IAsyncEndAction = { type: null, asyncFlag: asyncFlagEnd };

export interface IAsyncStartAction extends IAsyncFlagAction { asyncFlag: '@asyncFlagStart' }
export const asyncFlagStart = '@asyncFlagStart';
export const asyncActionStartProto: IAsyncStartAction = { type: null, asyncFlag: asyncFlagStart };

export function onAsyncStart(action: IAsyncStartAction, endType: string | IAsyncEndAction, asyncProc: Promise<any>) {
  if (action.asyncFlag != asyncFlagStart) throw new Error('action.asyncFlag != asyncFlagStart');
  asyncProc.then(res => {
    const end: IAsyncEndAction = typeof endType == 'string' ? { ...asyncActionEndProto, type: endType } : endType;
    end.asyncResult = res;
    if (recordingHook.currentRecording && recordingHook.currentRecording.status == RecordingStatus.playing) playActionsContinue(res, end); /* 5 */
    else store.dispatch(end);
  });
}

export const asyncMiddleware: Middleware<Action> = middlAPI => next => act => {
  next(act);
  if (recordingHook.currentRecording && recordingHook.currentRecording.status == RecordingStatus.recording) pushActions(act);
}

export function playActionsStart(): Promise<boolean> {
  if (!recordingHook.currentRecording) return Promise.resolve(true);
  recordingHook.currentRecording.actIdx = 0;
  return new Promise((resolve, reject) => {
    recordingHook.resolve = res => resolve(res);
    playActionsContinue();
  });
}

const pushActions = (act: Action) => recordingHook.currentRecording.actions.push(act);

const playActionsContinue = (asyncResult?: any, endAction?: IAsyncEndAction) => {
  const cr = recordingHook.currentRecording;
  if (cr.actIdx >= cr.actions.length) { recordingHook.resolve(true); delete recordingHook.resolve; return; } //playing finished
  let nextAction = cr.actions[cr.actIdx];
  if (!endAction && (nextAction as IAsyncEndAction).asyncFlag == asyncFlagEnd) return; /* 4 */ //next action is asyncEnd action. Wait for async action completed
  cr.actIdx++; //increase action pointer
  if (endAction && endAction.type != nextAction.type) throw new Error('endAction.type != nextAction.type'); //end action check
  setTimeout(() => {
    store.dispatch(endAction ? endAction : nextAction); /* 1. !endAction => AsyncStart, 6. endAction => AsyncEnd */
    playActionsContinue(); /* 3. nextAction is IAsyncEndAction */
  }, 300);
};

//********************** TEST

interface ITestState {
  testLog: Array<string>;
}

export function init() {
  const middlewares = applyMiddleware.apply({}, [asyncMiddleware]);
  setStore(createStore(rootReducer, {}, middlewares));
  recordingHook.currentRecording = { actions: [], actIdx: 0, status: RecordingStatus.recording };
  store.dispatch({ type: 'ANY' });
  store.dispatch({ type: 'START' });
  store.dispatch({ type: 'ANY' });
  setTimeout(() => {
    store.dispatch({ type: 'ANY' });
    store.dispatch({ type: 'START' });
    store.dispatch({ type: 'ANY' });
    setTimeout(() => {
      const log = getActState()['test'].testLog.join(',');
      recordingHook.currentRecording.status = RecordingStatus.playing;
      setStore(createStore(rootReducer, {}, middlewares));
      playActionsStart().then(() => {
        const newLog = getActState()['test'].testLog.join(',');
        alert(log === newLog);
      });
    }, 300);
  }, 300)
}

const testReducer: Reducer<ITestState, Action> = (state, action) => {
  if (!state) return { testLog: [] };
  switch (action.type) {
    case 'TEST':
      onAsyncStart(action as any, 'END', new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('async-data');
        }, 200);
        //}), { type: 'END', asyncFlag: asyncFlag }, true); /* 2 */
      })); /* 2 */
      return { testLog: [...state.testLog, `START ${getActState().blockGui.counter.toString()}`] };
    case 'END':
      const act = action as IAsyncEndAction;
      return { testLog: [...state.testLog, `END ${act.asyncResult.toString()} ${getActState().blockGui.counter.toString()}`] };
    case 'ANY':
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
