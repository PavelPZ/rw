import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';

import { addAsyncProc, IAsyncProcPar, doAsyncAction, IAsyncResultAction, store, IMapDispatchToProps, TDispatch, Reducer, TMiddlewareAPI, onAsyncStart, IAsync2EndAction, IAsync2StartAction, getActState, asyncFlagStart } from 'rw-redux';
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

const routerCHANGE_START = 'ASYNC_START_ROUTER'; interface IRouteChangeStartAction extends IAsync2StartAction { type: 'ASYNC_START_ROUTER', newRoute: DRouter.IRouteDir; withPustState: boolean; subPath: string; }
const dispatchRouterActionStart = (dispatch: TDispatch, newRoute: DRouter.IRouteDir, withPustState: boolean, subPath: string) => dispatch({ type: routerCHANGE_START, newRoute: newRoute, withPustState: withPustState, subPath: subPath, asyncFlag: asyncFlagStart } as IRouteChangeStartAction);

export interface IRouteChangeStartResult {
  newRoute: DRouter.IRouteDir;
  withPustState: boolean;
  forHandlerReducers: IForHandlerReducers; //changed handlers data. It is possible to create reducer, which modified state when handler route changed
}
export interface IForHandlerReducers { [handlerId: string]: Array<string>; }

export interface IRouteChangeEndAction extends IAsync2EndAction {
  type: 'ASYNC_END_ROUTER';
  asyncResult?: IRouteChangeStartResult;
}

export const routerCHANGE_END = 'ASYNC_END_ROUTER';

const routerReducer: Reducer<DRouter.IRouteDir, IRouteChangeEndAction | IRouteChangeStartAction> = (state, action) => {
  if (!state) return state = {}; //config.route.initRoute;
  switch (action.type) {
    case routerCHANGE_START:

      onAsyncStart(action, routerCHANGE_END, new Promise<IRouteChangeStartResult>(async (resolve, reject) => {
        const oldRoute = getActState().router;
        const diffs = diff(oldRoute, action.newRoute, action.subPath);
        const modifyRouteState = () => { //merge: old routes, delete modified routes, add new routes
          const routerNew = { ...oldRoute } as DRouter.IRouteDir; //plain cony
          diffs.changedAll.forEach(path => delete routerNew[path]);
          diffs.newAll.forEach(path => routerNew[path] = action.newRoute[path]);
          return routerNew;
        }

        //Login redirect chance
        const {login} = getActState();
        if (login && !login.isLogged) {
          const loginNeeded = diffs.newAll.find(path => {
            const rt = action.newRoute[path];
            return RouteHandler.find(rt.handlerId).loginNeeded(rt);
          });
          if (loginNeeded) { dispatchLoginRedirect(store.dispatch, route2string(modifyRouteState())); return; }
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
        resolve({ newRoute: newRouteState, withPustState: action.withPustState, forHandlerReducers: forHandlerReducers  } as IRouteChangeStartResult);
      }));

      return state;

    case routerCHANGE_END:
      if (action.asyncResult.withPustState) pushState(action.asyncResult.newRoute);
      return action.asyncResult.newRoute;

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
  createComponent(route: T): JSX.Element { return null; }
  prepare(route: T): Promise<any> { return null; } //chance to fetch async data
  unPrepare(route: T): Promise<never> { return null; }
  normalizeStringProps(props: T) { }
  loginNeeded(props: T): boolean { return false; }
  //statics
  static register(handler: TRouteHandler) { if (RouteHandler.handlers[handler.id]) throw new Error(handler.id); RouteHandler.handlers[handler.id] = handler; }
  static find(id: string): TRouteHandler { var res = RouteHandler.handlers[id]; if (!res) throw new Error(`TRouteHandler.find: cannot find ${id} handler`); return res; }
  static handlers: { [id: string]: TRouteHandler; } = {};
  static normalizeStringProps(props: DRouter.IRouteData) { RouteHandler.find(props.handlerId).normalizeStringProps(props); }
}
export type TRouteHandler = RouteHandler<any>;

