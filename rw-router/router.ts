import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';

import { store, IMapDispatchToProps, TDispatch, Reducer, TMiddlewareAPI, getActState, makeAsync, TAsyncActions, TAsyncActionPromise, toActions } from 'rw-redux';
import config from 'rw-config';

//*******
import { routeTreeToDir, routeDirToTree, diff, IDiffStateResult, string2route, route2string } from 'rw-router';


export function init() {
  const routeFromUrl = string2route(window.location.href, RouteHandler.normalizeStringProps);
  changeRoute(routeFromUrl, false);
}

export function navigate(tree: DRouter.IRouteData, ev?: React.SyntheticEvent<any>, subPath?: string) { if (ev) ev.preventDefault(); changeRoute(routeTreeToDir(tree, subPath), true, subPath); }
export function navigateModified<T extends DRouter.IRouteData>(subPath: string, modify: (res: T) => void, ev?: React.SyntheticEvent<any>) {
  const res = routeDirToTree<T>(getActState().router, subPath);
  modify(res);
  navigate(res, ev, subPath);
}
//export function modified<T extends DRouter.IRouteData>(subPath: string, modify: (res: T) => void): DRouter.IRouteData {
//  const res = routeDirToTree<T>(getActState().router, subPath);
//  modify(res);
//  return res, ev, subPath);
//}
export function navigateDir(dir: DRouter.IRouteDir, ev?: React.SyntheticEvent<any>, subPath?: string) { if (ev) ev.preventDefault(); changeRoute(dir, true, subPath); }
export const navigateHome = () => navigateDir(config.route.initRoute());
const navigateHomeAction = () => changeRouteAction(config.route.initRoute());
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

const changeRoute = (dir: DRouter.IRouteDir, withPustState: boolean, subPath?: string) => { store.dispatch(changeRouteAction(dir, withPustState, subPath)); };

const changeRouteAction = (newRoute: DRouter.IRouteDir, withPustState: boolean = true, subPath?: string) => {
  if (!newRoute) newRoute = config.route.initRoute();
  return doRouterActionStart(newRoute, withPustState, subPath);
}

export const loginREDIRECT = 'router.LOGIN_REDIRECT'; export interface ILoginRedirectAction extends Action { type: 'router.LOGIN_REDIRECT', returnUrl: string }
const doLoginRedirect = (returnUrl: string) => ({ type: loginREDIRECT, returnUrl: returnUrl } as ILoginRedirectAction);
//const dispatchLoginRedirect = (dispatch: TDispatch, returnUrl: string) => dispatch({ type: loginREDIRECT, returnUrl: returnUrl } as ILoginRedirectAction);

const routerCHANGE_START = 'ASYNC_START_ROUTER'; interface IRouteChangeStartAction { type: 'ASYNC_START_ROUTER', newRoute: DRouter.IRouteDir; withPustState: boolean; subPath: string; }
//const dispatchRouterActionStart = (dispatch: TDispatch, newRoute: DRouter.IRouteDir, withPustState: boolean, subPath: string) => dispatch(doRouterActionStart(newRoute, withPustState, subPath));
const doRouterActionStart = (newRoute: DRouter.IRouteDir, withPustState: boolean = true, subPath?: string) => ({ type: routerCHANGE_START, newRoute: newRoute, withPustState: withPustState, subPath: subPath } as IRouteChangeStartAction);

export interface IRouteChangeEndAction extends Action {
  type: 'ASYNC_END_ROUTER';
  newRoute: DRouter.IRouteDir;
  withPustState: boolean;
}
export const routerCHANGE_END = 'ASYNC_END_ROUTER';

const routerReducer: Reducer<DRouter.IRouteDir, IRouteChangeEndAction | IRouteChangeStartAction> = (state, action) => {
  if (!state) return state = {}; //config.route.initRoute;
  switch (action.type) {
    case routerCHANGE_START:
      makeAsync(action, routeAsyncProc(action));
      return state;
    case routerCHANGE_END:
      if (action.withPustState) pushState(action.newRoute);
      return action.newRoute;
    default:
      return state;
  }
}

const routeAsyncProc = async (action: IRouteChangeStartAction) => {
  const state = getActState();
  const oldRoute = state.router;
  const diffs = diff(oldRoute, action.newRoute, action.subPath);
  const getNewRouteState = () => {
    const newList = [...diffs.preserved.map(p => oldRoute[p]), ...diffs.newOrModified.map(p => action.newRoute[p])]; //old preserved + new + modified
    const routerNew = newList.reduce<DRouter.IRouteDir>((res, item) => { res[item.path] = item; return res; }, {}); //array to dir
    return routerNew;
  }

  const {loginState} = getActState();
  if (!loginState || !loginState.isLogged) {
    //Login redirect chance
    const loginNeededPath = diffs.newOrModified.find(path => {
      const rt = action.newRoute[path];
      return RouteHandler.find(rt.handlerId).loginNeeded(rt);
    });
    if (loginNeededPath) {
      const res = loginState ? doLoginRedirect(route2string(getNewRouteState())) : navigateHomeAction();
      setTimeout(() => store.dispatch(res),1);
      return [];
    }
  }

  //Unprepare old routes
  const unprepareActions = await toActions(diffs.modified.map(path => oldRoute[path]).map(rt => RouteHandler.find(rt.handlerId).unPrepare(rt)));
  //Get route state - change pointer to modified nodes
  const newRouteState = getNewRouteState();
  //Prepare new routes, async data to route
  const prepareActions = await toActions(diffs.newOrModified.map(path => newRouteState[path]).map(rt => RouteHandler.find(rt.handlerId).prepare(rt))); //array of async data

  const asyncEndActions = [
    ...unprepareActions,
    { type: routerCHANGE_END, newRoute: newRouteState, withPustState: action.withPustState } as IRouteChangeEndAction,
    ...prepareActions,
  ];

  return asyncEndActions;
};

//***** HANDLER
export abstract class RouteHandler<T extends DRouter.IRouteData> {
  constructor(public id: string) {
    RouteHandler.register(this);
  }
  //virtuals
  createComponent(route: T): JSX.Element { return null; }
  prepare(route: T): TAsyncActionPromise { return null; } //chance to fetch async data
  unPrepare(route: T): TAsyncActionPromise { return null; }
  normalizeStringProps(props: T) { }
  loginNeeded(route: T): boolean { return false; }
  //statics
  static register(handler: TRouteHandler) { if (RouteHandler.handlers[handler.id]) throw new Error(handler.id); RouteHandler.handlers[handler.id] = handler; }
  static find(id: string): TRouteHandler { var res = RouteHandler.handlers[id]; if (!res) throw new Error(`TRouteHandler.find: cannot find ${id} handler`); return res; }
  static handlers: { [id: string]: TRouteHandler; } = {};
  static normalizeStringProps(props: DRouter.IRouteData) { RouteHandler.find(props.handlerId).normalizeStringProps(props); }
}
export type TRouteHandler = RouteHandler<any>;

