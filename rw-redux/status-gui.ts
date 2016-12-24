import { Action } from 'redux';

import { IRootState, TDispatch, Reducer } from 'rw-redux/types';
import { store } from 'rw-redux/app-loader';

declare module 'rw-redux/types' {
  interface IRootState {
    gui?: IGuiState;
  }
}

export interface IGuiState {
  xxs: boolean;
  xs: boolean;
  smTablet: boolean;
  sm: boolean;
  md: boolean;
  lgTablet: boolean;
  lg: boolean;
  xl: boolean;
  xxl: boolean;
  xxxl: boolean;
}

export const guiMATCHMEDIA = 'gui.MATCHMEDIA'; export interface IGuiMatchMediaAction extends Action { type: 'gui.MATCHMEDIA'; width: number; }
const dispatchGuiMatchMedia = (dispatch: TDispatch, width: number) => dispatch({ type: guiMATCHMEDIA, width: width } as IGuiMatchMediaAction);

interface IBreakpoint { width: number; propName: string; mql?: MediaQueryList }
const breakpoints: Array<IBreakpoint> = [
  { propName: 'xxs', width: 480 },
  { propName: 'xs', width: 600 },
  { propName: 'smTablet', width: 720 },
  { propName: 'sm', width: 840 },
  { propName: 'md', width: 960 },
  { propName: 'lgTablet', width: 1024 },
  { propName: 'lg', width: 1280 },
  { propName: 'xl', width: 1440 },
  { propName: 'xxl', width: 1600 },
  { propName: 'xxxl', width: 1920 }
];

const init = (brk: IBreakpoint) => {
  brk.mql = window.matchMedia(`(min-width:${brk.width}px)`);
  brk.mql.addListener(() => dispatchGuiMatchMedia(store.dispatch, brk.width));
}

breakpoints.forEach(b => init(b));

export const guiStateReducerFnc = (state: IRootState, action: any): IRootState => {
  return {
    gui: guiStateReducer(state.gui, action),
  }
}

const guiStateReducer: Reducer<IGuiState, IGuiMatchMediaAction> = (state, action) => {
  if (!state || action.type == guiMATCHMEDIA) {
    const res: IGuiState = {} as any; let changed = !state;
    breakpoints.forEach(brk => {
      res[brk.propName] = !!brk.mql.matches;
      if (!changed) changed = res[brk.propName] !== state[brk.propName];
    });
    return changed ? res : state;
  } else
    return state;
}



