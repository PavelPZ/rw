import React from 'react';
import { connect } from 'react-redux';

import { IMapDispatchToProps, } from 'rw-redux';
import { RouteHandler } from 'rw-router';

export type IRouteHookMapStateToProps = DRouter.IRouteData;
export interface IRouteHookOwnProps { parentPath: string, hookId: string; }

const RouteHookPresent: React.StatelessComponent<IRouteHookMapStateToProps & IMapDispatchToProps> = router => {
  return router && router.handlerId ? RouteHandler.find(router.handlerId).createComponent(router) : null;
};

export const RouteHook = connect<IRouteHookMapStateToProps, IMapDispatchToProps, IRouteHookOwnProps>(
  (state: DRedux.IRootState, ownProps: IRouteHookOwnProps) => {
    const path = ownProps.parentPath + ownProps.hookId + '/';
    const res = state.router[path]
    return res ? res : {}; //state.router[path];
  }
)(RouteHookPresent);