import { Store, MiddlewareAPI, Action } from 'redux';

//*****
import { TDispatch } from './types';
import { recordingHook, ASYNC_START, IAsyncStartAction } from './async';
import { changeAppInitState, store } from './app-loader';

export enum RecordingStatus { no, recording, recorded, playing, cancelPlaying }

export interface IRecording {
  status?: RecordingStatus;
  appState?: {};
  actions?: Array<Action>;
  //in playlist
  title?: string;
  isSelected?: boolean; //selected for playing
}
let currentRecording: IRecording = {};

export interface INotify {
  inPlayList?: boolean;
  status?: RecordingStatus;
  title?: string;
  actionCount?: number;
  actionIdx?: number;
  recordsCount?: number;
  recordsIdx?: number;
}
export const notifyDataInit = (data: INotify) => notifyData = { title: '', actionCount: 0, actionIdx: 0, recordsCount: 0, recordsIdx: 0, ...data };
export let notifyData: INotify = notifyDataInit({});
export const notify = (data?: INotify) => onNotify.value(Object.assign(notifyData, data));
export const onNotify = { value: (data: INotify) => { } };
export const setStatus = (status: RecordingStatus) => { if (!currentRecording) return; currentRecording.status = status; notify({ status: status }); }


//play all actions
export const playRecording = () => {
  if (!currentRecording || currentRecording.status != RecordingStatus.recorded) return null;
  if (notifyData.recordsCount > 0)
    notify({ title: currentRecording.title, recordsIdx: notifyData.recordsIdx + 1 });
  else {
    notifyDataInit({ title: currentRecording.title, actionCount: currentRecording.actions.length });
    notify();
  }
  return new Promise((resolve, reject) => {
    setStatus(RecordingStatus.playing);
    if (!currentRecording || !currentRecording.appState || !currentRecording.actions || currentRecording.actions.length <= 0) resolve();
    const store = changeAppInitState(currentRecording.appState);
    //TODO: init browser URL
    let actIdx = 0; const dispatch = store.dispatch;
    let play: () => void;
    play = () => {
      try {
        if (!currentRecording || currentRecording.status != RecordingStatus.playing) { setStatus(RecordingStatus.recorded); return; }
        if (actIdx >= currentRecording.actions.length) { setStatus(RecordingStatus.recorded); resolve(); return; }
        playAction(dispatch, currentRecording.actions[actIdx]).then(() => setTimeout(() => play(), 500));
        notify({ actionIdx: notifyData.actionIdx + 1 });
        actIdx++;
      } catch (error) { reject(error); }
    };
    setTimeout(() => play(), 500);
  });
};

export const setCurrentRecording = (rec: IRecording) => currentRecording = rec;

//start recording
export const startRecording = (title?: string) => {
  cancel();
  currentRecording = { status: RecordingStatus.recording, appState: store.getState(), actions: [], title: title };
  setStatus(RecordingStatus.recording);
};

//cancel all
export const cancel = () => {
  cancelPlaying(); stopRecording();
  currentRecording = null;
  notifyDataInit({}); notify();
};

//stop recording
export const stopRecording = (title?: string) => {
  if (!currentRecording || currentRecording.status != RecordingStatus.recording) return;
  setStatus(RecordingStatus.recorded); if (title) currentRecording.title = title;
  //save recordedActions
  if (!currentRecording.title) currentRecording.title = 'default';
  localStorage.setItem(locStoragePrefix + currentRecording.title, JSON.stringify(currentRecording));
};
export const locStoragePrefix = 'records/';

//cancel playing
export const cancelPlaying = () => {
  if (!currentRecording || currentRecording.status != RecordingStatus.playing) return;
  currentRecording.status = RecordingStatus.cancelPlaying;
}

recordingHook.pushActions = act => {
  if (!currentRecording || currentRecording.status != RecordingStatus.recording) return;
  currentRecording.actions.push(act);
};

const playAction = (dispatch: TDispatch, action: Action) => {
  return new Promise(resolve => {
    if (action.type != ASYNC_START) { dispatch(action); resolve(); return; }
    const act = action as IAsyncStartAction;
    act.$playbackDone = () => { resolve(); delete act.$playbackDone; };
    dispatch(action);
  });
};
