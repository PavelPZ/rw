import React from 'react';
import { connect, ComponentDecorator } from 'react-redux';
import { Action } from 'redux';
import { createSelector } from 'reselect';

//*****
import config from 'rw-config';
import * as Cookie from 'js-cookie';
import { TDispatch, Reducer, IMapDispatchToProps } from 'rw-redux';
import { navigateHome, navigate, homeUrl, loginREDIRECT, ILoginRedirectAction, RouteHandler } from 'rw-router';

export const loginReducerFnc = (state: DRedux.IRootState, action: any): DRedux.IRootState => {
  return {
    loginState: loginReducer(state.loginState, action),
  }
}

export interface ILoginMapStateToProps {
  email: string;
  firstName: string;
  lastName: string;
  guiLarge: boolean;
  availableLogins: Array<string>
}
export interface ILoginMapDispatchToProps { onSelectProvider: (providerId: DLogin.TProviderIds, ev?: React.SyntheticEvent<any>) => any; }

export const loginSELECT_PROVIDER = 'login.SELECT_PROVIDER'; export interface ILoginSelectProviderAction extends Action { type: 'login.SELECT_PROVIDER'; providerId: DLogin.TProviderIds; }
const dispatchLoginSelectProvider = (dispatch: TDispatch, providerId: DLogin.TProviderIds) => dispatch({ type: loginSELECT_PROVIDER, providerId: providerId } as ILoginSelectProviderAction);

export const loginLOGOFF = 'login.LOGOFF'; export interface ILoginLogoffAction extends Action { type: 'login.LOGOFF'; }
const dispatchLoginLogoff = (dispatch: TDispatch) => dispatch({ type: loginLOGOFF } as ILoginLogoffAction);

const loginCookieName = 'ck-login';

const loginReducer: Reducer<DRedux.ILoginState, ILoginRedirectAction | ILoginSelectProviderAction | ILoginLogoffAction> = (state, action) => {
  if (!state) return Cookie.getJSON(loginCookieName) as DRedux.ILoginState || {}; //start app: get login from cookie
  const nextTick = (proc: () => void) => setTimeout(proc, 1);
  switch (action.type) {
    case loginREDIRECT: 
      Cookie.set(loginCookieName, { returnUrl: action.returnUrl } as DRedux.ILoginState);
      const loginRoute = config.login.loginRoute ? config.login.loginRoute() : null;
      nextTick(() => navigate(loginRoute));
      return state;
    case loginSELECT_PROVIDER:
      Cookie.set(loginCookieName, { returnUrl: homeUrl()/*default value*/, ...Cookie.getJSON(loginCookieName) as DRedux.ILoginState, providerId: action.providerId } as DRedux.ILoginState);
      nextTick(() => window.location.href = 'login.html');
      return state;
    case loginLOGOFF:
      const dummySt = {} as DRedux.ILoginState;
      Cookie.set(loginCookieName, dummySt);
      nextTick(navigateHome);
      return dummySt;
    default: return state;
  }
};

//interface na Login GUI
const loginSelector = createSelector<DRedux.IRootState, ILoginMapStateToProps, DRedux.ILoginState, boolean>(
  state => state.loginState,
  state => true, //config.login.guiBreakpoint ? state.gui[config.login.guiBreakpoint] : undefined,
  (login, gui) => ({ email: login.email, firstName: login.firstName, lastName: login.lastName, guiLarge: gui, availableLogins: config.login.availableLogins })
);

export interface ILoginProps { availableLogins: Array<string>; }
export const loginCreator: ComponentDecorator<ILoginMapStateToProps & ILoginMapDispatchToProps, ILoginProps> = connect<ILoginMapStateToProps, ILoginMapDispatchToProps, ILoginProps>(
  (state: DRedux.IRootState) => loginSelector(state),
  (dispatch: TDispatch, props) => ({ onSelectProvider: (providerId, ev) => { if (ev) ev.preventDefault(); return dispatchLoginSelectProvider(dispatch, providerId); } })
);
export type TLoginPresent = React.StatelessComponent<ILoginMapStateToProps & ILoginMapDispatchToProps>;
export const loginProxy: { value?: (props?: ILoginProps) => JSX.Element } = {};

//Route Handler
const LOGIN = 'login.LOGIN';
export interface ILogindRoute extends DRouter.IRouteData { handlerId: 'login.LOGIN'; }
export const createLoginRoute = () => ({ handlerId: LOGIN } as ILogindRoute)
class LoginHandler extends RouteHandler<ILogindRoute> {
  createComponent(routeData: ILogindRoute): JSX.Element { return loginProxy.value(); }
}
new LoginHandler(LOGIN);
