import { Action } from 'redux';

//*****
import { TMiddlewareAPI, Middleware } from './types';

export let recordingHook = {
  pushActions: (act: Action) => { }
};

export type TAsyncComplete = (onResolve?: () => void) => void;
export interface IAsyncProcPar { type: string; }
export type TAsyncProc<TPar extends IAsyncProcPar> = (par: TPar, completed: TAsyncComplete, api?: TMiddlewareAPI) => void;

export type ASYNC_START = 'ASYNC_START'; export const ASYNC_START: ASYNC_START = 'ASYNC_START';
export type ASYNC_END = 'ASYNC_END'; export const ASYNC_END: ASYNC_END = 'ASYNC_END';
export type ASYNC_ERROR = 'ASYNC_ERROR'; export const ASYNC_ERROR: ASYNC_ERROR = 'ASYNC_ERROR';
export interface IAsyncResultAction<T> extends Action { asyncResult: T; }
export type TAsyncResultAction = IAsyncResultAction<any>;
export interface IAsyncStartAction extends Action {
  type: ASYNC_START;
  asyncProcName: string;
  asyncProcPar: IAsyncProcPar;
  //for playback
  $playbackDone?: () => void;
}
export function doAsyncAction<TAsync extends IAsyncProcPar>(procPar: TAsync): IAsyncStartAction {
  return { type: ASYNC_START, asyncProcName: procPar.type, asyncProcPar: procPar/*, innerAction: innerAction*/ };
}
interface IAsyncEndAction extends Action { type: ASYNC_END }
export const doAsyncEndAction = () => ({ type: ASYNC_END } as IAsyncEndAction);
interface IAsyncErrorAction extends Action { type: ASYNC_ERROR; msg: any; }
export const doAsyncErrorAction = (msg: any) => ({ type: ASYNC_ERROR, msg: msg } as IAsyncErrorAction);

export const asyncMiddleware: Middleware<IAsyncStartAction> = middlAPI => next => act => {
  next(act);
  if (!noRecordFlag && typeof act == 'object') recordingHook.pushActions(act); //typeof act == 'object' je kvuli ev. Thunk action
  if (act.type != ASYNC_START) return;
  const asyncProc = asyncProcs[act.asyncProcName];
  noRecordFnc(() => //no record action zone, before async 
    asyncProc(act.asyncProcPar, onResolve => noRecordFnc(() => { //no record action zone, async resolved
      if (onResolve) onResolve();
      middlAPI.dispatch(doAsyncEndAction());
      if (act.$playbackDone) act.$playbackDone();
    }), middlAPI)
  );
}

export function addAsyncProc<TPar extends IAsyncProcPar>(name: string, proc: TAsyncProc<TPar>) {
  if (asyncProcs[name]) throw new Error('asyncProcs[name]');
  asyncProcs[name] = proc;
}

export const noRecordFnc = (code: () => void) => { noRecordFlag = true; try { code(); } finally { noRecordFlag = false; } };
let noRecordFlag = false;

const asyncProcs: { [name: string]: TAsyncProc<IAsyncProcPar>; } = {};