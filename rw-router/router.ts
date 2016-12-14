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

export function navigate(tree: IRouteData, ev?: any, subPath?: string) { if (ev) ev.preventDefault(); changeRoute(routeTreeToDir(tree, subPath), true, subPath); }

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

interface IRouterAsyncParData { newRoute: IRouteDir; withPustState: boolean; subPath: string; }
const loginREDIRECT = 'router.LOGIN_REDIRECT'; interface ILoginRedirectAction extends Action { type: 'router.LOGIN_REDIRECT', par: IRouterAsyncParData }
const dispatchLoginRedirect = (dispatch: TDispatch, par: IRouterAsyncParData) => dispatch({ type: loginREDIRECT, par: par } as ILoginRedirectAction);

const routerCHANGE_START = 'router.CHANGE_START'; type IRouterAsyncPar = IAsyncProcPar & IRouterAsyncParData; 
const dispatchRouterActionStart = (dispatch: TDispatch, newRoute: IRouteDir, withPustState: boolean, subPath: string) => dispatch(doAsyncAction<IRouterAsyncPar>({ type: routerCHANGE_START, newRoute: newRoute, withPustState: withPustState, subPath: subPath }));

const routerCHANGE_END = 'router.CHANGE_END'; interface IDoRouteChangeEnd extends IAsyncResultAction<string> { type: 'router.CHANGE_END'; newRoute: IRouteDir; withPustState: boolean; }
const dispatchRouteActionEnd = (dispatch: TDispatch, newRoute: IRouteDir, withPustState: boolean) => dispatch({ type: routerCHANGE_END, newRoute: newRoute, withPustState: withPustState } as IDoRouteChangeEnd);

addAsyncProc<IRouterAsyncPar>(routerCHANGE_START, async (par, completed, api) => {
  const router = (api.getState() as IRootState).router;
  const diffs = diff(router, par.newRoute, par.subPath);

  //Login redirect chance
  if (diffs.newAll) {
    const doCancel = diffs.newAll.find(path => {
      const rt = par.newRoute[path];
      return !RouteHandler.find(rt.handlerId).loginNeeded(rt, api);
    });
    if (doCancel) { completed(() => dispatchLoginRedirect(api.dispatch, { newRoute: par.newRoute, subPath: par.subPath, withPustState: par.withPustState })); return; }
  }

  //Unprepare old routes
  await Promise.all(diffs.changedAll.map(path => router[path]).map(rt => RouteHandler.find(rt.handlerId).unPrepare(rt)));

  //Modify route state
  const routerNew = { ...router } as IRouteDir;
  diffs.changedAll.forEach(path => delete routerNew[path]);
  diffs.newAll.forEach(path => routerNew[path] = par.newRoute[path]);

  //Prepare new routes
  const asyncData = await Promise.all(diffs.newAll.map(path => routerNew[path]).map(rt => RouteHandler.find(rt.handlerId).prepare(rt)));

  //preparation result (= async data) to route
  //asyncData.forEach(ad => routerNew[ad.path].$asyncData = ad.data);
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

