import React from 'react';
import { connect, ComponentDecorator } from 'react-redux';
import { Action } from 'redux';
import config from 'rw-config';
import { createSelector } from 'reselect';

//*****
import { Reducer } from 'rw-redux';

const BLOCK_GUI_START = 'BLOCK_GUI_START'; export const BLOCK_GUI_END = 'BLOCK_GUI_END';
export const blockGuiAction = (increase: boolean) => ({ type: increase ? BLOCK_GUI_START : BLOCK_GUI_END, $asyncEnd: true });

export const blockGuiCreator = connect<IBlockGuiProps, {}, {}>(
  (state: DRedux.IRootState) => blockGuiSelector(state)
);
export type TBlockGuiPresent = React.StatelessComponent<IBlockGuiProps>;
export const blockGuiProxy: { value?: () => JSX.Element } = {};
export interface IBlockGuiProps { show: boolean; }

const blockGuiSelector = createSelector<DRedux.IRootState, IBlockGuiProps, number>(
  (state: DRedux.IRootState) => state.blockGui.counter,
  counter => ({ show: counter > 0 })
);

const blockGuiReducer: Reducer<DRedux.IBlockGuiState, Action> = (state, action) => {
  if (!state) state = { counter: 0 };
  switch (action.type) {
    case BLOCK_GUI_START: return { counter: state.counter + 1 };
    case BLOCK_GUI_END: return { counter: state.counter - 1 };
    default: return state;
  }
};

export const blockGuiReducerFnc = (state: DRedux.IRootState, action: any): DRedux.IRootState => {
  return {
    blockGui: blockGuiReducer(state.blockGui, action),
  }
}