import React from 'react';

import { blockGuiReducerFnc, appInit, TMiddlewareAPI, getActState } from 'rw-redux';
import { matchMediaReducerFnc } from 'rw-lib/match-media';

import getRTAppRoot from 'rw-gui-rt/get-app-root';

import config from 'rw-config';

import { RouteHook, routeReducerFnc, RouteHandler, init as routerInit, navigate, routeTreeToDir, route, routeDirToTree, routeModify, parentPath } from 'rw-router';

import { loginReducerFnc, createLoginRoute } from 'rw-login/index';

//GUI import
import initLogin from 'rw-gui-rt/login/index'; initLogin();
import initBlockGui from 'rw-gui-rt/block-gui/index'; initBlockGui();

/***********************************************
              ROOT
***********************************************/
//route
const APP_ROOT = 'test.Login';
interface IAppRootRoute extends DRouter.IRouteData {
  handlerId: 'test.Login';
  $childs: {
    '': DRouter.IRouteData,
  }
}
//create app route
const createAppRoute = (child: DRouter.IRouteData) => ({ handlerId: APP_ROOT, $childs: { '': child } } as IAppRootRoute);

//handler
class RootHandler extends RouteHandler<IAppRootRoute> {
  createComponent(route: IAppRootRoute): JSX.Element { return <RootPresenter {...route} />; }
}
new RootHandler(APP_ROOT);

//components
const RootPresenter: React.StatelessComponent<IAppRootRoute> = props => {
  console.log('render RootPresenter');
  return <div>
    <h1>Hallo world</h1>
    <RouteHook parentPath={props.path} hookId='' />
  </div>;
}

/***********************************************
              CHILD
***********************************************/
const APP_CHILD = 'test.AppChild';
interface IAppChildRoute extends DRouter.IRouteData {
  handlerId: 'test.AppChild';
}
const createChildRoute = () => ({ handlerId: APP_CHILD } as IAppChildRoute)

class ChildHandler extends RouteHandler<IAppChildRoute> {
  createComponent(routeData: IAppChildRoute): JSX.Element {
    console.log('render ChildHandler');
    const state = getActState().router;
    const parPath = parentPath(state, routeData.path);
    return <div>
      <h2>Login needed component</h2>
    </div>;
  }
  loginNeeded(route: IAppChildRoute): boolean { return true; }
}
new ChildHandler(APP_CHILD);

/***********************************************
              APP
***********************************************/
const rootReducer = (state: DRedux.IRootState, action: any): DRedux.IRootState => {
  return {
    ...blockGuiReducerFnc(state, action),
    ...routeReducerFnc(state, action),
    ...loginReducerFnc(state, action),
    ...matchMediaReducerFnc(state, action),
  };
}

export function init() {
  appInit(rootReducer, document.getElementById('content'), getRTAppRoot);
  //Route definition
  config.route.initRoute = () => routeTreeToDir(createAppRoute(createChildRoute()));
  config.login.loginRoute = () => createAppRoute(createLoginRoute());
  //Router init
  routerInit();
}