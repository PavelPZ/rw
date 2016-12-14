import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';

//*****
import { Reducer, IMapDispatchToProps, IRootState } from './types';
import { ASYNC_END, ASYNC_START } from './async';

declare module './types' {
  interface IRootState {
    blockGui?: IBlockGuiState;
  }
}

export const blockGuiReducerFnc = (state: IRootState, action: any): IRootState => {
  return {
    blockGui: blockGuiReducer(state.blockGui, action),
  }
}

export const blockGui = connect<IBlockGuiMapStateToProps, IMapDispatchToProps, never>((state: IRootState) => ({ counterProp: state.blockGui.counter } as IBlockGuiMapStateToProps));

export interface IBlockGuiState { counter: number; }
export type TBlockGuiPresent = React.StatelessComponent<IBlockGuiMapStateToProps & IMapDispatchToProps>;

interface IBlockGuiMapStateToProps { counterProp: number; }

const blockGuiReducer: Reducer<IBlockGuiState, Action> = (state, action) => {
  if (!state) return { counter: 0 };
  switch (action.type) {
    case ASYNC_START: return { counter: state.counter + 1 };
    case ASYNC_END: return { counter: state.counter - 1 };
    default: return state;
  }
};


