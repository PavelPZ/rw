import { Store, MiddlewareAPI, Action } from 'redux';

//*****
//import { pushState } from '../rw-router/router';
import { changeAppInitState, store, recordingHook, ASYNC_START, IAsyncStartAction , TDispatch, IRootState } from 'rw-redux';

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
  playList?: Array<IRecording>;
  status?: RecordingStatus;
  title?: string;
  actionCount?: number;
  actionIdx?: number;
  recordsCount?: number;
  recordsIdx?: number;
}
export const notifyDataInit = (data?: INotify) => actNotifyData = { title: '', actionCount: 0, actionIdx: 0, recordsCount: 0, recordsIdx: 0, ...data };
export let actNotifyData: INotify = notifyDataInit({});
export const notify = (data?: INotify) => onNotify.value(Object.assign(actNotifyData, data));
export const onNotify = { value: (data: INotify) => { } };
export const setStatus = (status: RecordingStatus) => { if (!currentRecording) return; currentRecording.status = status; notify({ status: status }); }


//play all actions
export const playRecording = () => {
  if (!currentRecording || currentRecording.status != RecordingStatus.recorded) return null;
  if (actNotifyData.playList)
    notify({ title: currentRecording.title });
  else {
    notifyDataInit({ title: currentRecording.title, actionCount: currentRecording.actions.length });
    notify();
  }
  return new Promise((resolve, reject) => {
    setStatus(RecordingStatus.playing);
    if (!currentRecording || !currentRecording.appState || !currentRecording.actions || currentRecording.actions.length <= 0) resolve();
    const store = changeAppInitState(currentRecording.appState);
    //pushState((store.getState() as IRootState).router);
    let actIdx = 0; const dispatch = store.dispatch;
    let play: () => void;
    play = () => {
      try {
        if (!currentRecording || currentRecording.status != RecordingStatus.playing) { setStatus(RecordingStatus.recorded); notify({ playList:null }); return; }
        if (actIdx >= currentRecording.actions.length) { setStatus(RecordingStatus.recorded); resolve(); return; }
        playAction(dispatch, currentRecording.actions[actIdx]).then(() => setTimeout(() => { notify({ actionIdx: actNotifyData.actionIdx + 1 }); play(); }, 500));
        actIdx++;
      } catch (error) { reject(error); }
    };
    setTimeout(() => play(), 500);
  });
};

export const setCurrentRecording = (rec: IRecording) => currentRecording = rec;

//start recording
export const startRecording = () => {
  cancel();
  currentRecording = { status: RecordingStatus.recording, appState: store.getState(), actions: [], title: actNotifyData.title = curentRecordingTitle };
  setStatus(RecordingStatus.recording);
};
export const curentRecordingTitle = 'Current';

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
  if (!currentRecording.title) currentRecording.title = curentRecordingTitle;
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
  notify({ actionCount: currentRecording.actions.length });
};

const playAction = (dispatch: TDispatch, action: Action) => {
  return new Promise(resolve => {
    if (action.type != ASYNC_START) { dispatch(action); resolve(); return; }
    const act = action as IAsyncStartAction;
    act.$playbackDone = () => { resolve(); delete act.$playbackDone; };
    dispatch(action);
  });
};
