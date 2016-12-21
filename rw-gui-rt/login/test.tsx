import React from 'react';
import { IRootState, TMiddlewareAPI } from '../../rw-redux/types';
import { appInit } from '../../rw-redux/app-loader';
import { blockGuiReducerFnc } from '../../rw-redux/block-gui';
import { routeReducerFnc, RouteHandler, init as routerInit, navigate } from '../../rw-router/router';
import { RouteHook } from '../../rw-router/route-hook';
import { config } from '../../app-config';
import { IRouteData, IRouteDir } from '../../rw-router/url-parser';
import getRTAppRoot from '../get-app-root';

import { routeTreeToDir, route, routeDirToTree, routeModify, parentPath } from '../../rw-router/lib';

import { loginReducerFnc, createLoginRoute } from '../../rw-login/index';

//GUI import
import initLogin from './index'; initLogin();
import initBlockGui from '../block-gui/index'; initBlockGui();

/***********************************************
              ROOT
***********************************************/
//route
const APP_ROOT = 'test.Login';
interface IAppRootRoute extends IRouteData {
  handlerId: 'test.Login';
  $childs: {
    '': IRouteData,
  }
}
//create app route
const createAppRoute = (child: IRouteData) => ({ handlerId: APP_ROOT, $childs: { '': child } } as IAppRootRoute);

//handler
class RootHandler extends RouteHandler<IAppRootRoute> {
  createComponent(route: IAppRootRoute, state: IRouteDir): JSX.Element { return <RootPresenter {...route} />; }
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
interface IAppChildRoute extends IRouteData {
  handlerId: 'test.AppChild';
}
const createChildRoute = () => ({ handlerId: APP_CHILD } as IAppChildRoute)

class ChildHandler extends RouteHandler<IAppChildRoute> {
  createComponent(routeData: IAppChildRoute, state: IRouteDir): JSX.Element {
    console.log('render ChildHandler');
    const parPath = parentPath(state, routeData.path);
    return <div>
      <h2>Login needed component</h2>
    </div>;
  }
  loginNeeded(route: IAppChildRoute, api: TMiddlewareAPI): boolean { return true; }
}
new ChildHandler(APP_CHILD);

/***********************************************
              APP
***********************************************/
const rootReducer = (state: IRootState, action: any): IRootState => {
  return {
    ...blockGuiReducerFnc(state, action),
    ...routeReducerFnc(state, action),
    ...loginReducerFnc(state, action),
  };
}

export function init() {
  appInit(rootReducer, document.getElementById('content'), getRTAppRoot);
  //Route definition
  config.route.initRoute = () => routeTreeToDir(createAppRoute(createChildRoute()));
  config.login.loginRoute = () => routeTreeToDir(createAppRoute(createLoginRoute()));
  //Router init
  routerInit();
}