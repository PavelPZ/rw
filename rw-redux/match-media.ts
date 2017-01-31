import { Action } from 'redux';
import { config } from 'config';

import { store, TDispatch, Reducer } from 'rw-redux';

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

interface IBreakpoint { width: number; propName: string; mql?: MediaQueryList }

if (!config.serverRun) breakpoints.forEach(brk => {
  brk.mql = window.matchMedia(`(min-width:${brk.width}px)`);
  brk.mql.addListener(() => dispatchMatchMedia(store.dispatch, brk.width));
});

// reducers
export const matchMediaReducerFnc = (state: DRedux.IRootState, action: any): DRedux.IRootState => {
  return {
    gui: maatchMediaReducer(state.gui, action),
  }
}

const maatchMediaReducer: Reducer<DRedux.IMatchMediaState, IMatchMediaAction> = (state, action) => {
  if (!state || action.type == guiMATCHMEDIA) {
    const res: DRedux.IMatchMediaState = {} as any; let changed = !state;
    breakpoints.forEach(brk => {
      const newVal = res[brk.propName] = !!brk.mql.matches;
      if (!changed) changed = newVal !== state[brk.propName];
    });
    return changed ? res : state;
  } else
    return state;
}



