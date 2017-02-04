import React from 'react';
import { connect, ComponentDecorator } from 'react-redux';

//*****
import { TAction, Reducer, IMapDispatchToProps, asyncFlagEnd, asyncFlagStart, IAsyncFlagAction } from 'rw-redux';

export const blockGuiReducerFnc = (state: DRedux.IRootState, action: any): DRedux.IRootState => {
  return {
    blockGui: blockGuiReducer(state.blockGui, action),
  }
}

export const blockGuiCreator: ComponentDecorator<IBlockGuiMapStateToProps & IMapDispatchToProps, never> = connect<IBlockGuiMapStateToProps, IMapDispatchToProps, never>((state: DRedux.IRootState) => ({ counterProp: state.blockGui.counter } as IBlockGuiMapStateToProps));
export type TBlockGuiPresent = React.StatelessComponent<IBlockGuiMapStateToProps & IMapDispatchToProps>;
export const blockGuiProxy: { value?: () => JSX.Element } = {};

export interface IBlockGuiMapStateToProps { counterProp: number; }

const blockGuiReducer: Reducer<DRedux.IBlockGuiState, IAsyncFlagAction> = (state, action) => {
  if (!state) return { counter: 0 };
  switch (action.asyncFlag) {
    case asyncFlagStart: return { counter: state.counter + 1 };
    case asyncFlagEnd: return { counter: state.counter - 1 };
    default: return state;
  }
  
};


