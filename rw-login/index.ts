import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';

//*****
import { IConfig, config } from '../app-config';
import { writeObj, readObj } from '../rw-lib/cookie';
import { TDispatch, Reducer, IMapDispatchToProps, IRootState } from '../rw-redux/types';
import { IRouteDir, IRouteData } from '../rw-router/url-parser';
import { loginREDIRECT, ILoginRedirectAction, RouteHandler } from '../rw-router/router';

declare module '../app-config' {
  interface IConfig {
    login: {
      loginRoute: () => IRouteDir;
    }
  }
}

declare module '../rw-redux/types' {
  interface IRootState {
    login?: ILoginState;
  }
}

interface ILoginState {
  isLogged?: boolean;
  email?: string;
  firstName?: string;
  lastName?: string;
  providerId?: string;
  returnUrl?: string;
}

export const loginReducerFnc = (state: IRootState, action: any): IRootState => {
  return {
    login: loginReducer(state.login, action),
  }
}

interface ILoginMapStateToProps {
  email: string;
  firstName: string;
  lastName: string;
}
interface ILoginMapDispatchToProps { onSelectProvider: (providerId: string, ev?: React.SyntheticEvent) => any; }

export const loginSELECT_PROVIDER = 'login.SELECT_PROVIDER'; export interface ILoginSelectProviderAction extends Action { type: 'login.SELECT_PROVIDER'; providerId: string; }
const dispatchLoginSelectProvider = (dispatch: TDispatch, providerId: string) => dispatch({ type: loginSELECT_PROVIDER, providerId: providerId } as ILoginSelectProviderAction);

export const loginLOGOFF = 'login.LOGOFF'; export interface ILoginLogoffAction extends Action { type: 'login.LOGOFF'; }
const dispatchLoginLogoff = (dispatch: TDispatch) => dispatch({ type: loginLOGOFF } as ILoginLogoffAction);

const loginCookieName = 'login';

const loginReducer: Reducer<ILoginState, ILoginRedirectAction | ILoginSelectProviderAction | ILoginLogoffAction> = (state, action) => {
  if (!state) return readObj<ILoginState>(loginCookieName) || {};
  switch (action.type) {
    case loginREDIRECT:
      if (state.isLogged) {
        //TODO: goto Home page
        return;
      }
      writeObj(loginCookieName, { returnUrl: action.returnUrl } as ILoginState);
      //TODO: goto Login Page
      alert(action.returnUrl);
      return;
    case loginSELECT_PROVIDER:
      writeObj(loginCookieName, { returnUrl: 'todo: home URL', ...readObj<ILoginState>(loginCookieName), providerId: action.providerId } as ILoginState);
      window.location.href = 'login.html';
      return;
    case loginLOGOFF:
      writeObj(loginCookieName, {} as ILoginState);
      return {};
    default: return state;
  }
};

//interface na Login GUI
interface ILoginProps { availableLogins: Array<string>; }
export const loginCreator = connect<ILoginMapStateToProps, ILoginMapDispatchToProps, ILoginProps>(
  (state: IRootState) => ({ email: state.login.email, firstName: state.login.firstName, lastName: state.login.lastName }),
  (dispatch: TDispatch, props) => ({ onSelectProvider: (providerId, ev) => { if (ev) ev.preventDefault(); return dispatchLoginSelectProvider(dispatch, providerId); } })
);
export type TLoginPresent = React.StatelessComponent<ILoginMapStateToProps & ILoginMapDispatchToProps>;
export const loginProxy: { value?: (props?: ILoginProps) => JSX.Element } = { };

//Route Handler
const LOGIN = 'login.LOGIN';
interface ILogindRoute extends IRouteData { handlerId: 'login.LOGIN'; }
export const createLoginRoute = () => ({ handlerId: LOGIN } as ILogindRoute)
class LoginHandler extends RouteHandler<ILogindRoute> {
  createComponent(routeData: ILogindRoute, state: IRouteDir): JSX.Element { return loginProxy.value(); }
}
new LoginHandler(LOGIN);
