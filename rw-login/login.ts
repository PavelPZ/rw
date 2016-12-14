import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';

//*****
import { Reducer, IMapDispatchToProps, IRootState } from '../rw-redux/types';
import { loginREDIRECT, ILoginRedirectAction } from '../rw-router/router';

declare module '../rw-redux/types' {
  interface IRootState {
    login?: ILoginState;
  }
}

interface ILoginState {
  isLogged?: boolean;
}

export const loginReducerFnc = (state: IRootState, action: any): IRootState => {
  return {
    login: loginReducer(state.blockGui, action),
  }
}

export const blockGui = connect<ILoginMapStateToProps, IMapDispatchToProps, never>((state: IRootState) => ({ } as ILoginMapStateToProps));

export type TLoginPresent = React.StatelessComponent<ILoginMapStateToProps& IMapDispatchToProps>;

interface ILoginMapStateToProps { }

const loginReducer: Reducer<ILoginState, ILoginRedirectAction> = (state, action) => {
  if (!state) return { };
  switch (action.type) {
    case loginREDIRECT:
      alert(action.returnUrl);
      return;
    default: return state;
  }
};


