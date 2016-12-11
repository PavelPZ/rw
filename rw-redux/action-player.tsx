import { Store, MiddlewareAPI, Action } from 'redux';

//*****
import { TDispatch } from './types';
import { isRecording, recordedActions, ASYNC_START, IAsyncStartAction } from './async';
import { changeAppInitState, store } from './app-loader';

//play all actions
export const playActions = () => {
  return new Promise((resolve, reject) => {
    isRecording.value = false;
    if (!recordedActions || !recordedActions.startStatus || !recordedActions.actions || recordedActions.actions.length <= 0) resolve();
    const store = changeAppInitState(recordedActions.startStatus);
    let actIdx = 0; const dispatch = store.dispatch;
    let play: () => void;
    play = () => {
      try {
        if (actIdx >= recordedActions.actions.length) { resolve(); return; }
        playAction(dispatch, recordedActions.actions[actIdx]).then(() => setTimeout(() => play(), 500));
        actIdx++;
      } catch (error) { reject(error); }
    };
    setTimeout(() => play(), 500);
  });
};

//start recording
export const startRecording = () => {
  isRecording.value = true;
  recordedActions.startStatus = store.getState(); recordedActions.actions = [];
};

const playAction = (dispatch: TDispatch, action: Action) => {
  return new Promise(resolve => {
    if (action.type != ASYNC_START) { dispatch(action); resolve(); return; }
    const act = action as IAsyncStartAction;
    act.$playbackDone = () => { resolve(); delete act.$playbackDone; };
    dispatch(action);
  });
};
