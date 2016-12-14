import React from 'react';
import { RouteHandler } from 'router';
import { IRouteDir } from './url-parser';
import { IMapDispatchToProps, IRootState } from '../rw-redux/types';
import { connect } from 'react-redux';

interface IRouteHookMapStateToProps { root: IRouteDir; path: string; }
interface IRouteHookOwnProps { parentPath: string, hookId: string; }

const RouteHookPresent: React.StatelessComponent<IRouteHookMapStateToProps & IMapDispatchToProps> = props => {
  const rt = props.root[props.path];
  return rt && rt.handlerId ? RouteHandler.find(rt.handlerId).createComponent(rt, props.root) : null;
};

export const RouteHook = connect<IRouteHookMapStateToProps, IMapDispatchToProps, IRouteHookOwnProps>(
  (state: IRootState, ownProps: IRouteHookOwnProps) => ({ root: state.router, path: ownProps.parentPath + ownProps.hookId + '/' })
)(RouteHookPresent);