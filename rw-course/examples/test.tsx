import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import page from './gap-fill';
import { PageLoader, courseNavigAction, TCourseNavigClick } from 'rw-course';
import { TClickEvent, TDispatch } from 'rw-redux';

export const init = async () => {
  await System.import('lm/oldea/english1/l01/a/hueex0_l01_a01');
  //System.import('lm/oldea/english1/l01/a/hueex0_l01_a01').then(m => { }).catch(err => { debugger; });
  //ReactDOM.render(<Root/>, document.getElementById('content'));
}

const rootPresenter: React.StatelessComponent<IRootMapDispatchToProps> = props => <div>
  <a href='#' onClick={ev => props.load({ userEmail: null, courseUrl: null, attemptId: null, pageUrl:'rw-course/examples/gap-fill' }, ev)}>LOAD</a> | <a href='#' onClick={ev => props.load(null, ev)}>UNLOAD</a>
  <PageLoader />
</div>;

interface IRootMapDispatchToProps { load: TCourseNavigClick; unload: TCourseNavigClick; }

const Root = connect<never, IRootMapDispatchToProps, never>(
  null,
  (dispatch: TDispatch) => ({
    load: (data, ev) => courseNavigAction(dispatch, data, ev),
    unload: (data, ev) => courseNavigAction(dispatch, data, ev)
  })
)(rootPresenter);
