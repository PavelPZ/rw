import React from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

//lm libs
import { appInit, TMiddlewareAPI, getActState, blockGuiReducerFnc, TAsyncActionPromise, Reducer } from 'rw-redux';
import config from 'rw-config';
import { loginReducerFnc } from 'rw-login/index';
import { timerPromise } from 'rw-lib/deferred';

//GUI libs
import getRTAppRoot from 'rw-gui-rt/get-app-root';
import initBlockGui from 'rw-gui-rt/block-gui/index'; initBlockGui();

//self lib
import { routeTreeToDir, route, routeDirToTree, routeModify, parentPath, RouteHook, routeReducerFnc, RouteHandler, init as routerInit, navigate } from 'rw-router';

/***********************************************
              STATE
***********************************************/
interface ITitle { title: string; }
interface IAppState {
  //parentState: ITitle;
  [id: string]: ITitle;
}
type IAppStore = DRedux.IRootState & { app: IAppState; };
const parentState = 'parentState';

const adjustTitleState = (state: ITitle, tit: string): ITitle => {
  return state ? state : { title: tit };
};

/***********************************************
              PARENT
***********************************************/
const PARENT = 'PARENT';
interface IParentRoute extends DRouter.IRouteData {
  handlerId: 'PARENT';
  routeTitle: string;
  $childs?: {
    '': IChildRoute,
    ch1: IChildRoute
  }
}
const createParentRoute = (title: string, child?: IChildRoute, ch1$child?: IChildRoute) => ({ handlerId: PARENT, routeTitle: title, $childs: { '': child, ch1: ch1$child } } as IParentRoute);

interface IParentProps { propsTitle: string; } //presenter props
interface IParentOwnProps { initTitle: string; route: IParentRoute; } //HOC connected component props

const parentSelector = createSelector<IAppStore, IParentProps, string>(
  (state, ownProps: IParentOwnProps) => adjustTitleState(state.app['parentState'], ownProps.initTitle).title,
  title => ({ propsTitle: title })
);

const parentPresenter: React.StatelessComponent<IParentProps & IParentOwnProps> = props => {
  console.log('> render parent ');
  const path = props.route.path;
  return <div>
    <h1 onClick={ev => {
      const state = getActState().router;
      return navigate(routeModify<IParentRoute>(state, path, route => route.routeTitle += '-x'), ev, path);
    }}>{props.propsTitle}</h1>
    <RouteHook parentPath={path} hookId='' />
    <RouteHook parentPath={path} hookId='ch1' />
  </div>;
};

const Parent = connect<IParentProps, never, IParentOwnProps>(
  (state: IAppStore, ownProps) => parentSelector(state, ownProps),
)(parentPresenter);

interface IParentPrepareAction extends Action { type: 'PARENT_PREPARE'; actionTitle: string; }
const PARENT_PREPARE = 'PARENT_PREPARE';

const parentReducer: Reducer<IAppState, IParentPrepareAction | IChildPrepareAction> = (state, action) => {
  if (!state) return {};
  switch (action.type) {
    case PARENT_PREPARE: return { ...state, parentState: { title: action.actionTitle } };
    default: return childReducer(state, action);
  }
}

//handler
class ParentHandler extends RouteHandler<IParentRoute> {
  createComponent(route: IParentRoute): JSX.Element { return <Parent route={route} initTitle='Parent' />; }
  prepare(route: IParentRoute): TAsyncActionPromise { return timerPromise(500, { type: PARENT_PREPARE, actionTitle: route.routeTitle } as IParentPrepareAction); }
}
new ParentHandler(PARENT);

/***********************************************
              CHILD
***********************************************/
const CHILD = 'CHILD';
interface IChildRoute extends DRouter.IRouteData {
  handlerId: 'CHILD';
  routeChildTitle: string;
}
const createChildRoute = (title: string) => ({ handlerId: CHILD, routeChildTitle: title } as IChildRoute);

interface IChildProps { propsChildTitle: string } //presenter props
interface IChildOwnProps { initChildTitle: string; route: IChildRoute } //HOC connected component props

const makeChildSelector = () => createSelector<IAppStore, IChildProps, string>(
  (state, ownProps: IChildOwnProps) => adjustTitleState(state.app[ownProps.route.path], ownProps.initChildTitle).title,
  title => ({
    propsChildTitle: title
  })
);

const makeMapChildStateToProps = () => (state: IAppStore, ownProps: IChildOwnProps) => makeChildSelector()(state, ownProps);

const childPresenter: React.StatelessComponent<IChildProps & IChildOwnProps> = props => {
  const path = props.route.path;
  console.log('> render child ' + path);
  return <h3 onClick={ev => {
    const state = getActState().router;
    return navigate(routeModify<IChildRoute>(state, path, route => route.routeChildTitle += '-x'), ev, path);
  }}>{props.propsChildTitle}</h3>;
}

const Child = connect<IChildProps, never, IChildOwnProps>(
  makeMapChildStateToProps
  //(state: IAppStore, ownProps) => {
  //  const st = state.app[ownProps.route.path];
  //  return {
  //    propsChildTitle: st ? st.title : ownProps.initChildTitle,
  //    ownProps: ownProps
  //  }
  //}
)(childPresenter);

interface IChildPrepareAction extends Action { type: 'CHILD_PREPARE'; actionId: string; actionTitle: string; }
const CHILD_PREPARE = 'CHILD_PREPARE';

const childReducer: Reducer<IAppState, IChildPrepareAction> = (state, action) => {
  switch (action.type) {
    case CHILD_PREPARE: return { ...state, [action.actionId]: { title: action.actionTitle } };
    default: return state;
  }
}

class ChildHandler extends RouteHandler<IChildRoute> {
  createComponent(route: IChildRoute): JSX.Element { return <Child initChildTitle='child own title' route={route} />; }
  prepare(route: IChildRoute): TAsyncActionPromise { const res: IChildPrepareAction = { type: CHILD_PREPARE, actionTitle: route.routeChildTitle, actionId: route.path }; return timerPromise(500, res); }
}
new ChildHandler(CHILD);

/***********************************************
              APP
***********************************************/
const rootReducer = (state: IAppStore, action: any): IAppStore => {
  return {
    ...blockGuiReducerFnc(state, action),
    ...routeReducerFnc(state, action),
    ...loginReducerFnc(state, action),
    app: parentReducer(state.app, action)
  };
}

export function init() {
  appInit(rootReducer, document.getElementById('content'), getRTAppRoot);
  //Route definition
  config.route.initRoute = () => routeTreeToDir(createParentRoute('Hallo-parent', createChildRoute('Hallo-child-1'), createChildRoute('Hallo-child-2')));
  //config.route.initRoute = () => routeTreeToDir(createParentRoute('Hallo-world-x', null, null));
  //Router init
  routerInit();
}

