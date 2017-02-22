import React from 'react';

//lm libs
import { blockGuiReducerFnc, appInit, TMiddlewareAPI } from 'rw-redux';
import config from 'rw-config';
//import { loginReducerFnc } from 'rw-login/index';

//GUI libs
import getRTAppRoot from 'rw-gui-rt/get-app-root';
import initBlockGui from 'rw-gui-rt/block-gui/index'; initBlockGui();

//self lib
import { routeTreeToDir, route, routeDirToTree, parentPath, RouteHook, routeReducerFnc, RouteHandler, init as routerInit, navigate } from 'rw-router';

//declare const __moduleName: string;
//const id = __moduleName.substring(config.rootPath.length - 1);
//debugger;
//const name = System.normalize(id).then(s => {
//  const idl = id; const mn = __moduleName;
//  debugger;
//});

/***********************************************
              ROOT
***********************************************/
//route
const APP_ROOT = 'APP_ROOT';
interface IRootRoute extends DRouter.IRouteData {
  handlerId: 'APP_ROOT';
}
//create app route
const createRootRoute = (child: DRouter.IRouteData) => ({ handlerId: APP_ROOT, $childs: { '': child } } as IRootRoute);

//handler
class RootHandler extends RouteHandler<IRootRoute> {
  createComponent(route: IRootRoute): JSX.Element {
    return <div>
      <h1>Course Test APP</h1>
      <RouteHook parentPath={route.path} hookId='' />
    </div>;
  }
}
new RootHandler(APP_ROOT);

/***********************************************
              CHILD
***********************************************/
//const DISPLAY_EX = 'DISPLAY_EX';
//interface IAppChildRoute extends DRouter.IRouteData {
//  handlerId: 'DISPLAY_EX';
//}
//const createChildRoute = (numId: number) => ({ handlerId: APP_CHILD, numId: numId } as IAppChildRoute)

//class ChildHandler extends RouteHandler<IAppChildRoute> {
//  createComponent(routeData: IAppChildRoute, state: DRouter.IRouteDir): JSX.Element {
//    console.log('render ChildHandler');
//    const parPath = parentPath(state, routeData.path);
//    return <div>
//      <h2>{routeData.numId}</h2>
//      <a href="#" onClick={ev => navigate(routeModify<IAppRootRoute>(state, parPath, res => { res.title += ' x'; res.$childs.ch1.numId += 1; }), ev, parPath)}>Click</a>
//    </div>;
//  }
//  unPrepare(route: IAppChildRoute): Promise<never> { return new Promise<never>(resolve => setTimeout(() => resolve(), 500)); }
//  normalizeStringProps(route: IAppChildRoute) { if (typeof route.numId === 'string') route.numId = parseInt(route.numId as any); }
//  loginNeeded(route: IAppChildRoute, api: TMiddlewareAPI): boolean { return route.numId >= 25; }
//}
//new ChildHandler(APP_CHILD);

/***********************************************
              APP
***********************************************/
const rootReducer = (state: DRedux.IRootState, action: any): DRedux.IRootState => {
  return {
    ...blockGuiReducerFnc(state, action),
    ...routeReducerFnc(state, action),
    //...loginReducerFnc(state, action),
  };
}

export function init() {
  appInit(rootReducer, document.getElementById('content'), getRTAppRoot);
  //Route definition
  config.route.initRoute = () => routeTreeToDir(createRootRoute(null));
  //Router init
  routerInit();
}
