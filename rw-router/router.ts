import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';

import { IMapDispatchToProps, TDispatch, IRootState, Reducer, TMiddlewareAPI } from '../rw-redux/types';
import { store } from '../rw-redux/app-loader';
import { addAsyncProc, IAsyncProcPar, doAsyncAction, IAsyncResultAction } from '../rw-redux/async';
import { config } from '../app-config';

//*******
import { diff, IDiffStateResult } from './state';
import { string2route, route2string, IRouteData, IRouteDir } from './url-parser';
import { routeTreeToDir } from './lib';


export function init(initTree: () => IRouteData) {
  config.route.initRoute = () => routeTreeToDir(initTree());
  const routeFromUrl = string2route(window.location.href, RouteHandler.normalizeStringProps);
  changeRoute(routeFromUrl ? routeFromUrl : config.route.initRoute(), false);
}

export function navigate(tree: IRouteData, ev?: React.SyntheticEvent, subPath?: string) { if (ev) ev.preventDefault(); changeRoute(routeTreeToDir(tree, subPath), true, subPath); }

export const routeReducerFnc = (state: IRootState, action: any): IRootState => {
  return {
    router: routerReducer(state.router, action)
  }
}

//***************** POPSTATE EVENT
window.addEventListener("popstate", ev => {
  console.log(`> popstate: ${window.location.href}`);
  const route = string2route(window.location.href, RouteHandler.normalizeStringProps);
  changeRoute(route ? route : config.route.initRoute(), false);
});

//modify browser URL
function pushState(route: IRouteDir) {
  let urlStr = route2string(route);
  console.log(`> pushState: ${urlStr}`);
  history.pushState(null, null, urlStr);
}

function changeRoute(newRoute: IRouteDir, withPustState: boolean, subPath?: string) { dispatchRouterActionStart(store.dispatch, newRoute, withPustState, subPath); }

export const loginREDIRECT = 'router.LOGIN_REDIRECT'; export interface ILoginRedirectAction extends Action { type: 'router.LOGIN_REDIRECT', returnUrl: string }
const dispatchLoginRedirect = (dispatch: TDispatch, returnUrl: string) => dispatch({ type: loginREDIRECT, returnUrl: returnUrl } as ILoginRedirectAction);

const routerCHANGE_START = 'router.CHANGE_START'; interface IRouterAsyncPar extends IAsyncProcPar { newRoute: IRouteDir; withPustState: boolean; subPath: string; }
const dispatchRouterActionStart = (dispatch: TDispatch, newRoute: IRouteDir, withPustState: boolean, subPath: string) => dispatch(doAsyncAction<IRouterAsyncPar>({ type: routerCHANGE_START, newRoute: newRoute, withPustState: withPustState, subPath: subPath }));

const routerCHANGE_END = 'router.CHANGE_END'; interface IDoRouteChangeEnd extends IAsyncResultAction<string> { type: 'router.CHANGE_END'; newRoute: IRouteDir; withPustState: boolean; }
const dispatchRouteActionEnd = (dispatch: TDispatch, newRoute: IRouteDir, withPustState: boolean) => dispatch({ type: routerCHANGE_END, newRoute: newRoute, withPustState: withPustState } as IDoRouteChangeEnd);

addAsyncProc<IRouterAsyncPar>(routerCHANGE_START, async (par, completed, api) => {
  const routerOld = api.getState().router;
  const diffs = diff(routerOld, par.newRoute, par.subPath);
  const modifyRouteState = () => { //merge: old routes, delete modified routes, add new routes
    const routerNew = { ...routerOld } as IRouteDir;
    diffs.changedAll.forEach(path => delete routerNew[path]);
    diffs.newAll.forEach(path => routerNew[path] = par.newRoute[path]);
    return routerNew;
  }

  //Login redirect chance
  if (!api.getState().login.isLogged) {
    const loginNeeded = diffs.newAll.find(path => {
      const rt = par.newRoute[path];
      return RouteHandler.find(rt.handlerId).loginNeeded(rt, api);
    });
    if (loginNeeded) { completed(() => dispatchLoginRedirect(api.dispatch, route2string(modifyRouteState()))); return; }
  }

  //Unprepare old routes
  await Promise.all(diffs.changedAll.map(path => routerOld[path]).map(rt => RouteHandler.find(rt.handlerId).unPrepare(rt)));

  //Modify route state
  const routerNew = modifyRouteState();

  //Prepare new routes, async data to route
  const asyncData = await Promise.all(diffs.newAll.map(path => routerNew[path]).map(rt => RouteHandler.find(rt.handlerId).prepare(rt)));
  for (let i = 0; i < diffs.newAll.length; i++) if (asyncData[i]) routerNew[diffs.newAll[i]].$asyncData = asyncData[i];

  //Route end: modify app state etc.
  completed(() => dispatchRouteActionEnd(api.dispatch, routerNew, par.withPustState));
});

const routerReducer: Reducer<IRouteDir, IDoRouteChangeEnd> = (state, action) => {
  if (!state) return state = {}; //config.route.initRoute;
  switch (action.type) {
    case routerCHANGE_END:
      if (action.withPustState) pushState(action.newRoute);
      return action.newRoute;
    default:
      return state;
  }
}

//***** HANDLER
export abstract class RouteHandler<T> {
  constructor(public id: string) {
    RouteHandler.register(this);
  }
  //virtuals
  abstract createComponent(route: IRouteData, state: IRouteDir): JSX.Element;
  prepare(route: IRouteData): Promise<any> { return null; }
  unPrepare(route: IRouteData): Promise<never> { return null; }
  normalizeStringProps(props: IRouteData) { }
  loginNeeded(props: IRouteData, api: TMiddlewareAPI): boolean { return false; }
  //statics
  static register(handler: TRouteHandler) { if (RouteHandler.handlers[handler.id]) throw new Error(handler.id); RouteHandler.handlers[handler.id] = handler; }
  static find(id: string): TRouteHandler { var res = RouteHandler.handlers[id]; if (!res) throw new Error(`TRouteHandler.find: cannot find ${id} handler`); return res; }
  static handlers: { [id: string]: TRouteHandler; } = {};
  static normalizeStringProps(props: IRouteData) { RouteHandler.find(props.handlerId).normalizeStringProps(props); }
}
export type TRouteHandler = RouteHandler<any>;

