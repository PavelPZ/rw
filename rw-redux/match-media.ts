import { Action } from 'redux';
import { config } from 'config';

import { store, IRootState, TDispatch, Reducer } from 'rw-redux';

declare module 'rw-redux' {
  interface IRootState {
    gui?: IMatchMediaState;
  }
}

export interface IMatchMediaState {
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

export const guiMATCHMEDIA = 'gui.MATCHMEDIA'; export interface IMatchMediaAction extends Action { type: 'gui.MATCHMEDIA'; width: number; }
const dispatchMatchMedia = (dispatch: TDispatch, width: number) => dispatch({ type: guiMATCHMEDIA, width: width } as IMatchMediaAction);

// breakpoint metadata
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

if (!config.serverRun) breakpoints.forEach(brk => {
  brk.mql = window.matchMedia(`(min-width:${brk.width}px)`);
  brk.mql.addListener(() => dispatchMatchMedia(store.dispatch, brk.width));
});

// reducers
export const matchMediaReducerFnc = (state: IRootState, action: any): IRootState => {
  return {
    gui: maatchMediaReducer(state.gui, action),
  }
}

const maatchMediaReducer: Reducer<IMatchMediaState, IMatchMediaAction> = (state, action) => {
  if (!state || action.type == guiMATCHMEDIA) {
    const res: IMatchMediaState = {} as any; let changed = !state;
    breakpoints.forEach(brk => {
      const newVal = res[brk.propName] = !!brk.mql.matches;
      if (!changed) changed = newVal !== state[brk.propName];
    });
    return changed ? res : state;
  } else
    return state;
}



