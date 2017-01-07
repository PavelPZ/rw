import React from 'react';
import { connect, ComponentDecorator } from 'react-redux';
import { Action } from 'redux';
import { createSelector } from 'reselect';

//*****
import { IConfig, config } from 'config';
import { writeObj, readObj } from 'rw-lib/cookie';
import { IMatchMediaState, TDispatch, Reducer, IMapDispatchToProps, IRootState } from 'rw-redux';
import { IRouteDir, IRouteData, gotoHome, navigate, homeUrl, loginREDIRECT, ILoginRedirectAction, RouteHandler } from 'rw-router';

declare module 'config' {
  interface IConfig {
    login: {
      loginRoute: () => IRouteData;
      availableLogins: Array<string>;
      guiBreakpoint: keyof IMatchMediaState;
    }
  }
}

declare module 'rw-redux/types' {
  interface IRootState {
    login?: ILoginState;
  }
}

export interface ILoginState {
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

export interface ILoginMapStateToProps {
  email: string;
  firstName: string;
  lastName: string;
  guiLarge: boolean;
  availableLogins: Array<string>
}
export interface ILoginMapDispatchToProps { onSelectProvider: (providerId: string, ev?: React.SyntheticEvent<any>) => any; }

export const loginSELECT_PROVIDER = 'login.SELECT_PROVIDER'; export interface ILoginSelectProviderAction extends Action { type: 'login.SELECT_PROVIDER'; providerId: string; }
const dispatchLoginSelectProvider = (dispatch: TDispatch, providerId: string) => dispatch({ type: loginSELECT_PROVIDER, providerId: providerId } as ILoginSelectProviderAction);

export const loginLOGOFF = 'login.LOGOFF'; export interface ILoginLogoffAction extends Action { type: 'login.LOGOFF'; }
const dispatchLoginLogoff = (dispatch: TDispatch) => dispatch({ type: loginLOGOFF } as ILoginLogoffAction);

const loginCookieName = 'ck-login';

const loginReducer: Reducer<ILoginState, ILoginRedirectAction | ILoginSelectProviderAction | ILoginLogoffAction> = (state, action) => {
  if (!state) return readObj<ILoginState>(loginCookieName) || {}; //start app: get login from cookie
  const nextTick = (proc: () => void) => setTimeout(proc, 1);
  switch (action.type) {
    case loginREDIRECT:
      if (state.isLogged) {
        nextTick(gotoHome);
        return state;
      }
      writeObj(loginCookieName, { returnUrl: action.returnUrl } as ILoginState);
      nextTick(() => navigate(config.login.loginRoute()));
      return state;
    case loginSELECT_PROVIDER:
      writeObj(loginCookieName, { returnUrl: homeUrl(), ...readObj<ILoginState>(loginCookieName), providerId: action.providerId } as ILoginState);
      nextTick(() => window.location.href = 'login.html');
      return state;
    case loginLOGOFF:
      writeObj(loginCookieName, {} as ILoginState);
      nextTick(gotoHome);
      return {};
    default: return state;
  }
};

//interface na Login GUI
const loginSelector = createSelector<IRootState, ILoginMapStateToProps, ILoginState, boolean>(
  state => state.login,
  state => config.login.guiBreakpoint ? state.gui[config.login.guiBreakpoint] : undefined,
  (login, gui) => ({ email: login.email, firstName: login.firstName, lastName: login.lastName, guiLarge: gui, availableLogins: config.login.availableLogins })
);

export interface ILoginProps { availableLogins: Array<string>; }
export const loginCreator: ComponentDecorator<ILoginMapStateToProps & ILoginMapDispatchToProps, ILoginProps> = connect<ILoginMapStateToProps, ILoginMapDispatchToProps, ILoginProps>(
  (state: IRootState) => loginSelector(state),
  (dispatch: TDispatch, props) => ({ onSelectProvider: (providerId, ev) => { if (ev) ev.preventDefault(); return dispatchLoginSelectProvider(dispatch, providerId); } })
);
export type TLoginPresent = React.StatelessComponent<ILoginMapStateToProps & ILoginMapDispatchToProps>;
export const loginProxy: { value?: (props?: ILoginProps) => JSX.Element } = {};

//Route Handler
const LOGIN = 'login.LOGIN';
export interface ILogindRoute extends IRouteData { handlerId: 'login.LOGIN'; }
export const createLoginRoute = () => ({ handlerId: LOGIN } as ILogindRoute)
class LoginHandler extends RouteHandler<ILogindRoute> {
  createComponent(routeData: ILogindRoute, state: IRouteDir): JSX.Element { return loginProxy.value(); }
}
new LoginHandler(LOGIN);
