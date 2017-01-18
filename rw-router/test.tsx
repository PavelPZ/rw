import React from 'react';

//lm libs
import { blockGuiReducerFnc, appInit, IRootState, TMiddlewareAPI } from 'rw-redux';
import { config } from 'config';
//import { loginReducerFnc } from 'rw-login/index';

//GUI libs
import getRTAppRoot from 'rw-gui-rt/get-app-root';
import initBlockGui from 'rw-gui-rt/block-gui/index'; initBlockGui();

//self lib
import { routeTreeToDir, route, routeDirToTree, routeModify, parentPath, IRouteData, IRouteDir, RouteHook, routeReducerFnc, RouteHandler, init as routerInit, navigate } from 'rw-router';

//declare const __moduleName: string;
//const id = __moduleName.substring(config.rootPath.length - 1);
//debugger;
//const name = System.normalize(id).then(s => {
//  const idl = id; const mn = __moduleName;
//  debugger;
//});

/***********************************************
              PARENT
***********************************************/
let cnt = 1;

//route
const APP_ROOT = 'test.AppRoot';
interface IAppRootRoute extends IRouteData {
  handlerId: 'test.AppRoot';
  title: string;
  $asyncData?: string;
  $childs?: {
    '': IAppChildRoute,
    ch1: IAppChildRoute
  }
}
//create app route
const createAppRoute = (title: string, child: IAppChildRoute, ch1$child: IAppChildRoute) => ({ handlerId: APP_ROOT, title: title, $childs: { '': child, ch1: ch1$child } } as IAppRootRoute);

//handler
class RootHandler extends RouteHandler<IAppRootRoute> {
  createComponent(route: IAppRootRoute, state: IRouteDir): JSX.Element { return <RootPresenter {...route} instanceTitle='instance 1' />; }
  prepare(route: IRouteData): Promise<string> { return new Promise<string>(resolve => setTimeout(() => resolve('parent async data x'), 500)); }
  //prepare(route: IRouteData): Promise<any> { return new Promise<any>(resolve => resolve('parent async data')); }
  //prepare(route: IRouteData): Promise<any> { return 'parent async data' as any; }
}
new RootHandler(APP_ROOT);

//components
interface IRootPresenterProps { instanceTitle: string; }
const RootPresenter: React.StatelessComponent<IRootPresenterProps & IAppRootRoute> = props => {
  console.log('render RootPresenter');
  return <div>
    <h1>{props.title}: {props.instanceTitle}: {props.$asyncData}</h1>
    <RouteHook parentPath={props.path} hookId='' />
    <RouteHook parentPath={props.path} hookId='ch1' />
  </div>;
}

/***********************************************
              CHILD
***********************************************/
const APP_CHILD = 'test.AppChild';
interface IAppChildRoute extends IRouteData {
  handlerId: 'test.AppChild';
  numId: number;
}
const createChildRoute = (numId: number) => ({ handlerId: APP_CHILD, numId: numId } as IAppChildRoute)

class ChildHandler extends RouteHandler<IAppChildRoute> {
  createComponent(routeData: IAppChildRoute, state: IRouteDir): JSX.Element {
    console.log('render ChildHandler');
    const parPath = parentPath(state, routeData.path);
    return <div>
      <h2>{routeData.numId}</h2>
      <a href="#" onClick={ev => navigate(routeModify<IAppRootRoute>(state, parPath, res => { res.title += ' x'; res.$childs.ch1.numId += 1; }), ev, parPath)}>Click</a>
    </div>;
  }
  unPrepare(route: IAppChildRoute): Promise<never> { return new Promise<never>(resolve => setTimeout(() => resolve(), 500)); }
  normalizeStringProps(route: IAppChildRoute) { if (typeof route.numId === 'string') route.numId = parseInt(route.numId as any); }
  loginNeeded(route: IAppChildRoute, api: TMiddlewareAPI): boolean { return route.numId >= 25; }
}
new ChildHandler(APP_CHILD);

/***********************************************
              APP
***********************************************/
const rootReducer = (state: IRootState, action: any): IRootState => {
  return {
    ...blockGuiReducerFnc(state, action),
    ...routeReducerFnc(state, action),
    //...loginReducerFnc(state, action),
  };
}

export function init() {
  appInit(rootReducer, document.getElementById('content'), getRTAppRoot);
  //Route definition
  config.route.initRoute = () => routeTreeToDir(createAppRoute('Hallo world x', createChildRoute(10), createChildRoute(20)));
  //Router init
  routerInit();
}
