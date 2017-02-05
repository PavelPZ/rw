import React from 'react';
import { connect, ComponentDecorator } from 'react-redux';
import { createSelector } from 'reselect';

//*****
import { Reducer, asyncFlagEnd, asyncFlagStart, IAsyncFlagAction } from 'rw-redux';

export const blockGuiCreator = connect<IBlockGuiProps, never, never>(
  (state: DRedux.IRootState) => blockGuiSelector(state)
);
export type TBlockGuiPresent = React.StatelessComponent<IBlockGuiProps>;
export const blockGuiProxy: { value?: () => JSX.Element } = {};
export interface IBlockGuiProps { show: boolean; }

const blockGuiSelector = createSelector<DRedux.IRootState, IBlockGuiProps, number>(
  (state: DRedux.IRootState) => state.blockGui.counter,
  counter => ({ show: counter > 0 })
);

const blockGuiReducer: Reducer<DRedux.IBlockGuiState, IAsyncFlagAction> = (state, action) => {
  if (!state) return { counter: 0 };
  switch (action.asyncFlag) {
    case asyncFlagStart: return { counter: state.counter + 1 };
    case asyncFlagEnd: return { counter: state.counter - 1 };
    default: return state;
  }

};

export const blockGuiReducerFnc = (state: DRedux.IRootState, action: any): DRedux.IRootState => {
  return {
    blockGui: blockGuiReducer(state.blockGui, action),
  }
}