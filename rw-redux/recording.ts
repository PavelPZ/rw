import { Store, MiddlewareAPI, Action } from 'redux';

//*****
import { changeAppInitState, store, ASYNC_START, IAsyncStartAction, TDispatch, RecordingStatus, IRecording, recordingHook, playActionsStart, getActState } from 'rw-redux';

export interface IRecNotify {
  playList?: Array<IRecording>;
  status?: RecordingStatus;
  title?: string;
  actionCount?: number;
  actionIdx?: number;
  recordsCount?: number;
  recordsIdx?: number;
}
export const notifyDataInit = (data?: IRecNotify) => actNotifyData = { title: '', actionCount: 0, actionIdx: 0, recordsCount: 0, recordsIdx: 0, ...data };
export let actNotifyData: IRecNotify = notifyDataInit({});
export const notify = (data?: IRecNotify) => onNotify.value(Object.assign(actNotifyData, data));
export const onNotify = { value: (data: IRecNotify) => { } };
export const setStatus = (status: RecordingStatus) => { const cr = recordingHook.currentRecording; if (!cr) return; cr.status = status; notify({ status: status }); }


//play all actions
export const playRecording = () => {
  const cr = recordingHook.currentRecording;
  if (!cr || cr.status != RecordingStatus.recorded) return null;
  if (actNotifyData.playList)
    notify({ title: cr.title });
  else {
    notifyDataInit({ title: cr.title, actionCount: cr.actions.length });
    notify();
  }
  if (!cr || !cr.appState || !cr.actions || cr.actions.length <= 0) return Promise.resolve(true);
  setStatus(RecordingStatus.playing);
  changeAppInitState(cr.appState);
  return playActionsStart().then(res => { setStatus(RecordingStatus.recorded); return true; });
};

export const setCurrentRecording = (rec: IRecording) => recordingHook.currentRecording = rec;

//start recording
export const startRecording = () => {
  cancel();
  recordingHook.currentRecording = { status: RecordingStatus.recording, appState: store.getState(), actions: [], title: actNotifyData.title = curentRecordingTitle };
  setStatus(RecordingStatus.recording);
};
export const curentRecordingTitle = 'Current';

//cancel all
export const cancel = () => {
  cancelPlaying(); stopRecording();
  recordingHook.currentRecording = null;
  notifyDataInit({}); notify();
};

//stop recording
export const stopRecording = (title?: string) => {
  const cr = recordingHook.currentRecording;
  if (!cr || cr.status != RecordingStatus.recording) return;
  setStatus(RecordingStatus.recorded); if (title) cr.title = title;
  //save recordedActions
  if (!cr.title) cr.title = curentRecordingTitle;
  localStorage.setItem(locStoragePrefix + cr.title, JSON.stringify(cr));
};
export const locStoragePrefix = 'records/';

//cancel playing
export const cancelPlaying = () => {
  const cr = recordingHook.currentRecording;
  if (!cr || cr.status != RecordingStatus.playing) return;
  cr.status = RecordingStatus.cancelPlaying;
}

