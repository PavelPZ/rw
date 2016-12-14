import { Store, MiddlewareAPI, Action } from 'redux';

//*****
import { TDispatch } from './types';
import { recordingHook, ASYNC_START, IAsyncStartAction } from './async';
import { changeAppInitState, store } from './app-loader';

const enum RecordingStatus { no, recording, recorded, playing }

interface IRecording {
  status?: RecordingStatus;
  startStatus?: {};
  actions?: Array<Action>;
  //in playlist
  title?: string;
  isSelected?: boolean; //selected for playing
}
let currentRecording: IRecording;

interface IPlayList {
  records: Array<IRecording>;
}

export const playList = (list: IPlayList) => {
  cancelPlaying();
}

recordingHook.pushActions = act => {
  if (!currentRecording || currentRecording.status != RecordingStatus.recording) return;
  currentRecording.actions.push(act);
};

//play all actions
export const playRecording = () => {
  if (!currentRecording || currentRecording.status != RecordingStatus.recorded) return;
  return new Promise((resolve, reject) => {
    currentRecording.status = RecordingStatus.playing;
    if (!currentRecording || !currentRecording.startStatus || !currentRecording.actions || currentRecording.actions.length <= 0) resolve();
    const store = changeAppInitState(currentRecording.startStatus);
    let actIdx = 0; const dispatch = store.dispatch;
    let play: () => void;
    play = () => {
      try {
        if (currentRecording.status != RecordingStatus.playing) return;
        if (actIdx >= currentRecording.actions.length) { currentRecording.status = RecordingStatus.recorded; resolve(); return; }
        playAction(dispatch, currentRecording.actions[actIdx]).then(() => setTimeout(() => play(), 500));
        actIdx++;
      } catch (error) { reject(error); }
    };
    setTimeout(() => play(), 500);
  });
};


//start recording
export const startRecording = (title: string) => {
  cancelPlaying();
  currentRecording = { status: RecordingStatus.recording, startStatus: store.getState(), actions: [], title: title };
};

export const cancelPlaying = () => {
  if (!currentRecording || currentRecording.status != RecordingStatus.playing) return;
  currentRecording.status = RecordingStatus.recorded; 
}

//start recording
export const stopRecording = () => {
  if (!currentRecording || currentRecording.status != RecordingStatus.recording) return;
  currentRecording.status = RecordingStatus.recorded;
  //save recordedActions
  //clear
  currentRecording = null;
};

const playAction = (dispatch: TDispatch, action: Action) => {
  return new Promise(resolve => {
    if (action.type != ASYNC_START) { dispatch(action); resolve(); return; }
    const act = action as IAsyncStartAction;
    act.$playbackDone = () => { resolve(); delete act.$playbackDone; };
    dispatch(action);
  });
};
