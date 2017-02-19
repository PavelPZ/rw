import React from 'react';
import { connect } from 'react-redux';
import { IMapDispatchToProps, } from 'rw-redux';
import { RouteHandler } from 'rw-router';
import { createSelector } from 'reselect';

export type IRouteHookProps = DRouter.IRouteData;
export interface IRouteHookOwnProps { parentPath: string, hookId: string; }

const RouteHookPresent: React.StatelessComponent<IRouteHookProps & IRouteHookOwnProps> = router => {
  console.log('> render RouteHook ' + router.path);
  return router && router.handlerId ? RouteHandler.find(router.handlerId).createComponent(router) : null;
};

const makeSelector = () => createSelector<DRedux.IRootState, IRouteHookProps, DRouter.IRouteData>(
  (state, ownProps: IRouteHookOwnProps) => {
    const path = ownProps.parentPath + ownProps.hookId + '/';
    const res = state.router[path]
    return res ? res : emptyState;
  },
  route => route
);
const emptyState: any = {};

const makeMapStateToProps = () => (state: DRedux.IRootState, ownProps: IRouteHookOwnProps) => makeSelector()(state, ownProps);

export const RouteHook = connect<IRouteHookProps, never, IRouteHookOwnProps>(makeMapStateToProps)(RouteHookPresent);

