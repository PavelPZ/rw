import React from 'react';
import { connect, ComponentDecorator } from 'react-redux';
import { Action } from 'redux';

//*****
import { ASYNC_END, ASYNC_START, Reducer, IMapDispatchToProps } from 'rw-redux';

//declare module 'rw-redux' {
//  interface DRedux.IRootState {
//    blockGui?: IBlockGuiState;
//  }
//}
//export interface IBlockGuiState { counter: number; }

export const blockGuiReducerFnc = (state: DRedux.IRootState, action: any): DRedux.IRootState => {
  return {
    blockGui: blockGuiReducer(state.blockGui, action),
  }
}

export const blockGuiCreator: ComponentDecorator<IBlockGuiMapStateToProps & IMapDispatchToProps, never> = connect<IBlockGuiMapStateToProps, IMapDispatchToProps, never>((state: DRedux.IRootState) => ({ counterProp: state.blockGui.counter } as IBlockGuiMapStateToProps));
export type TBlockGuiPresent = React.StatelessComponent<IBlockGuiMapStateToProps & IMapDispatchToProps>;
export const blockGuiProxy: { value?: () => JSX.Element } = {};

export interface IBlockGuiMapStateToProps { counterProp: number; }

const blockGuiReducer: Reducer<DRedux.IBlockGuiState, Action> = (state, action) => {
  if (!state) return { counter: 0 };
  switch (action.type) {
    case ASYNC_START: return { counter: state.counter + 1 };
    case ASYNC_END: return { counter: state.counter - 1 };
    default: return state;
  }
};


