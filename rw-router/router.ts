import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';

import { addAsyncProc, IAsyncProcPar, doAsyncAction, IAsyncResultAction, store, IMapDispatchToProps, TDispatch, Reducer, TMiddlewareAPI } from 'rw-redux';
import config from 'rw-config';

//*******
import { routeTreeToDir, diff, IDiffStateResult, string2route, route2string } from 'rw-router';


export function init() {
  //if (initTree) config.route.initRoute = () => routeTreeToDir(initTree());
  const routeFromUrl = string2route(window.location.href, RouteHandler.normalizeStringProps);
  changeRoute(routeFromUrl ? routeFromUrl : config.route.initRoute(), false);
}

export function navigate(tree: DRouter.IRouteData, ev?: React.SyntheticEvent<any>, subPath?: string) { if (ev) ev.preventDefault(); changeRoute(routeTreeToDir(tree, subPath), true, subPath); }
export function navigateDir(dir: DRouter.IRouteDir, ev?: React.SyntheticEvent<any>, subPath?: string) { if (ev) ev.preventDefault(); changeRoute(dir, true, subPath); }
export const gotoHome = () => navigateDir(config.route.initRoute());
export const homeUrl = () => route2string(config.route.initRoute());

export const routeReducerFnc = (state: DRedux.IRootState, action: any): DRedux.IRootState => {
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
export const pushState = (route: DRouter.IRouteDir) => {
  let urlStr = route2string(route);
  console.log(`> pushState: ${urlStr}`);
  history.pushState(null, null, urlStr);
}

function changeRoute(newRoute: DRouter.IRouteDir, withPustState: boolean, subPath?: string) { dispatchRouterActionStart(store.dispatch, newRoute, withPustState, subPath); }

export const loginREDIRECT = 'router.LOGIN_REDIRECT'; export interface ILoginRedirectAction extends Action { type: 'router.LOGIN_REDIRECT', returnUrl: string }
const dispatchLoginRedirect = (dispatch: TDispatch, returnUrl: string) => dispatch({ type: loginREDIRECT, returnUrl: returnUrl } as ILoginRedirectAction);

const routerCHANGE_START = 'router.CHANGE_START'; interface IRouterAsyncPar extends IAsyncProcPar { newRoute: DRouter.IRouteDir; withPustState: boolean; subPath: string; }
const dispatchRouterActionStart = (dispatch: TDispatch, newRoute: DRouter.IRouteDir, withPustState: boolean, subPath: string) => dispatch(doAsyncAction<IRouterAsyncPar>({ type: routerCHANGE_START, newRoute: newRoute, withPustState: withPustState, subPath: subPath }));

export const routerCHANGE_END = 'router.CHANGE_END';
export interface IDoRouteChangeEnd extends IAsyncResultAction<string> {
  type: 'router.CHANGE_END';
  newRoute: DRouter.IRouteDir;
  withPustState: boolean;
  forHandlerReducers: IForHandlerReducers; //changed handlers data. Iti is possible to create reducer, which modified state when handler route changed
}
export interface IForHandlerReducers { [handlerId: string]: Array<string>; }
const dispatchRouteActionEnd = (dispatch: TDispatch, newRoute: DRouter.IRouteDir, withPustState: boolean, forHandlerReducers: IForHandlerReducers) => dispatch({ type: routerCHANGE_END, newRoute: newRoute, withPustState: withPustState, forHandlerReducers: forHandlerReducers } as IDoRouteChangeEnd);

addAsyncProc<IRouterAsyncPar>(routerCHANGE_START, async (par, completed, api) => {
  const oldRoute = (api.getState() as DRedux.IRootState).router;
  const diffs = diff(oldRoute, par.newRoute, par.subPath);
  const modifyRouteState = () => { //merge: old routes, delete modified routes, add new routes
    const routerNew = { ...oldRoute } as DRouter.IRouteDir; //plain cony
    diffs.changedAll.forEach(path => delete routerNew[path]);
    diffs.newAll.forEach(path => routerNew[path] = par.newRoute[path]);
    return routerNew;
  }

  //Login redirect chance
  const {login} = (api.getState() as DRedux.IRootState);
  if (login && !login.isLogged) {
    const loginNeeded = diffs.newAll.find(path => {
      const rt = par.newRoute[path];
      return RouteHandler.find(rt.handlerId).loginNeeded(rt, api);
    });
    if (loginNeeded) { completed(() => dispatchLoginRedirect(api.dispatch, route2string(modifyRouteState()))); return; }
  }

  //Unprepare old routes
  await Promise.all(diffs.changedAll.map(path => oldRoute[path]).map(rt => RouteHandler.find(rt.handlerId).unPrepare(rt)));

  //Get route state - change pointer to modified nodes
  const newRouteState = modifyRouteState();

  //Prepare new routes, async data to route
  const asyncData = await Promise.all(diffs.newAll.map(path => newRouteState[path]).map(rt => RouteHandler.find(rt.handlerId).prepare(rt))); //array of async data
  const forHandlerReducers: IForHandlerReducers = {};
  for (let i = 0; i < diffs.newAll.length; i++) {
    const path = diffs.newAll[i];
    const rt = newRouteState[path]; rt.$asyncData = asyncData[i];
    let reds = forHandlerReducers[rt.handlerId];
    if (!reds) reds = forHandlerReducers[rt.handlerId] = [];
    reds.push(path);
  }

  //Call route end action. Chance for handler reducers
  completed(() => dispatchRouteActionEnd(api.dispatch, newRouteState, par.withPustState, forHandlerReducers));
});

const routerReducer: Reducer<DRouter.IRouteDir, IDoRouteChangeEnd> = (state, action) => {
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
export abstract class RouteHandler<T extends DRouter.IRouteData> {
  constructor(public id: string) {
    RouteHandler.register(this);
  }
  //virtuals
  createComponent(route: T, state: DRouter.IRouteDir): JSX.Element { return null; }
  prepare(route: T): Promise<any> { return null; } //chance to fetch async data
  unPrepare(route: T): Promise<never> { return null; }
  normalizeStringProps(props: T) { }
  loginNeeded(props: T, api: TMiddlewareAPI): boolean { return false; }
  //statics
  static register(handler: TRouteHandler) { if (RouteHandler.handlers[handler.id]) throw new Error(handler.id); RouteHandler.handlers[handler.id] = handler; }
  static find(id: string): TRouteHandler { var res = RouteHandler.handlers[id]; if (!res) throw new Error(`TRouteHandler.find: cannot find ${id} handler`); return res; }
  static handlers: { [id: string]: TRouteHandler; } = {};
  static normalizeStringProps(props: DRouter.IRouteData) { RouteHandler.find(props.handlerId).normalizeStringProps(props); }
}
export type TRouteHandler = RouteHandler<any>;

