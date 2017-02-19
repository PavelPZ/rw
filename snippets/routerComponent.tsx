import React from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Reducer, TAsyncActionPromise } from 'rw-redux';
import { RouteHandler } from 'rw-router';
import { timerPromise } from 'rw-lib/deferred';

const $YYY$ = '$YYY$';
interface I$Yyy$Route extends DRouter.IRouteData {
  handlerId: '$YYY$';
  routeXXX: string;
  $childs?: {
  }
}
const create$Yyy$Route = (title: string, child?: any) => ({ handlerId: $YYY$, routeXXX: title, $childs: { '': child } } as I$Yyy$Route);

interface I$Yyy$Props { propsXxx: string; ownProps: I$Yyy$OwnProps; } //presenter props
interface I$Yyy$OwnProps { ownXxx: string; } //HOC connected component props

const $yyy$Selector = createSelector<DRedux.IRootState, I$Yyy$Props, I$Yyy$Props>(
  (state, ownProps: I$Yyy$OwnProps) => ({
    ownProps: ownProps,
    propsXxx: ownProps.ownXxx
  }),
  res => res
);

const $yyy$Presenter: React.StatelessComponent<I$Yyy$Props> = props => <div>
</div>;

const Parent = connect<I$Yyy$Props, never, I$Yyy$OwnProps>(
  (state: DRedux.IRootState, ownProps) => $yyy$Selector(state, ownProps),
)($yyy$Presenter);

interface I$Yyy$PrepareAction extends Action { type: '$YYY$_PREPARE'; zzz: string; }
const $YYY$_PREPARE = '$YYY$_PREPARE';

const $yyy$Reducer: Reducer<DRedux.IRootState, I$Yyy$PrepareAction> = (state, action) => {
  if (!state) return { zzz: 'zzz' };
  switch (action.type) {
    case $YYY$_PREPARE: return { ...state, zzz: action.zzz };
    default: return state;
  }
}

//handler
class $Yyy$Handler extends RouteHandler<I$Yyy$Route> {
  createComponent(route: I$Yyy$Route): JSX.Element { return <Parent ownXxx='yyy' />; }
  prepare(route: I$Yyy$Route): TAsyncActionPromise { return timerPromise(500, { type: $YYY$_PREPARE, zzz: route.routeXXX } as I$Yyy$PrepareAction); }
}
new $Yyy$Handler($YYY$);
