import React from 'react';
import { IRootState } from '../rw-redux/types';
import { appInit } from '../rw-redux/app-loader';
import { blockGuiReducerFnc } from '../rw-redux/block-gui';
import BlockGui from '../rw-gui-rt/block-gui/index';
import { RouteHook, routeReducerFnc, RouteHandler, init as routerInit, navigate } from './router';
import { config } from '../app-config';
import { IRouteData, IRouteDir } from './url-parser';

import { routeTreeToDir, route, routeDirToTree, routeModify, parentPath } from './lib';

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
  subTitle: string;
}
const createChildRoute = (subTitle: string) => ({ handlerId: APP_CHILD, subTitle: subTitle } as IAppChildRoute)

class ChildHandler extends RouteHandler<IAppChildRoute> {
  createComponent(routeData: IAppChildRoute, state:IRouteDir): JSX.Element {
    console.log('render ChildHandler');
    const parPath = parentPath(state, routeData.path);
    return <div>
      <h2>{routeData.subTitle}</h2>
      <a href="#" onClick={ev => navigate(routeModify<IAppRootRoute>(state, parPath, res => { res.title += ' x'; res.$childs.ch1.subTitle += ' x';}), ev, parPath)}>Click</a>
    </div>;
  }
  unPrepare(route: IRouteData): Promise<never> { return new Promise<never>(resolve => setTimeout(() => resolve(), 500)); }
}
new ChildHandler(APP_CHILD);

/***********************************************
              APP
***********************************************/
const rootReducer = (state: IRootState, action: any): IRootState => {
  return {
    ...blockGuiReducerFnc(state, action),
    ...routeReducerFnc(state, action),
  };
}

export function init() {
  appInit(rootReducer, document.getElementById('content'), () => <div><BlockGui /><RouteHook parentPath='' hookId='' /></div>);
  routerInit(() => createAppRoute('Hallo world x', createChildRoute('Child 1'), createChildRoute('Child 2')));
}

