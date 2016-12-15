import React from 'react';
import ReactDOM from 'react-dom';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

//******
import { startRecording, playRecording } from './recording.js';
import { addAsyncProc, doAsyncAction, IAsyncStartAction, IAsyncResultAction, ASYNC_END, ASYNC_START, noRecordFnc, IAsyncProcPar } from './async';  
import { appInit } from './app-loader';
import { Reducer, TDispatch, IRootState, IMapDispatchToProps } from './types';
import { blockGuiReducerFnc, blockGui, TBlockGuiPresent } from './block-gui';

/***********************************************
              BLOCK GUI
***********************************************/
const BlockGuiPresent: TBlockGuiPresent = props => {
  console.log('render BlockGui');
  return props.counterProp > 0 ? <h3 style={{ color: 'red' }}>Loading...</h3> : null;
};

const BlockGui = blockGui(BlockGuiPresent);

/***********************************************
              PARENT
***********************************************/

//************* parent state modifier by means of Action's and Reducer's
interface IParentSubState { text: string; }
interface IParentState { root: IParentSubState; childs: IChildSubState; childIds: Array<string> }
interface IChildSubState { [id: string]: IChildState; }

interface IParentAction extends Action { type: 'PARENT_ACT'; } const PARENT_ACT = 'PARENT_ACT';

//https://gist.github.com/markerikson/ea4d0a6ce56ee479fe8b356e099f857e
//http://stackoverflow.com/questions/34427851/reducing-an-entire-subtree-with-redux-combinereducers
export const doParentAction = (dispatch: TDispatch) => dispatch({ type: PARENT_ACT });

const parentReducer: Reducer<IParentState, IParentAction | IDoChild> = (state = { root: { text: 'parent' }, childIds: [], childs: {} }, action) => {
  switch (action.type) {
    //case PARENT_ACT: return { root: { text: state.root.text + ' x' }, childs: state.childs, childIds: state.childIds };
    //case CHILD_ACT: return { root: state.root, childIds: state.childIds, childs: Object.assign({}, state.childs, { [action.id]: childReducer(state.childs[action.id], action) }) };
    case PARENT_ACT: return { ...state, ... ({ root: { text: state.root.text + ' x' } }) };
    case CHILD_ACT: return { ...state, childs: { ...state.childs, [action.id]: childReducer(state.childs[action.id], action) } };
    default: return state;
  }
};

interface IParentMapStateToProps { textProp: string; childIds: Array<string> }
interface IParentMapDispatchToProps { onClickProp: (ev?: React.SyntheticEvent) => any; }

//************* aktualizace View na zaklade zmeny state, by means of Presenter, Container and Selector
//Presenter:
const ParentPresent: React.StatelessComponent<IParentMapStateToProps & IParentMapDispatchToProps> = props => {
  console.log('render Parent');
  return <div>
    <h1 onClick={() => props.onClickProp()}>{props.textProp}</h1>
    <Child id="ch1" initState={{ text: 'child ch1' }} />
    <Child id="ch2" initState={{ text: 'child ch2' }} />
    <Child id="ch3" initState={{ text: 'child ch3' }} />
    {/*props.childIds.map(id => <Child id={id} key={id} />)*/}
    <BlockGui />
    <Counter />
    <div onClick={ev => { ev.preventDefault(); startRecording(); } }>Start recording</div>
    <div onClick={ev => { ev.preventDefault(); playRecording(); } }>Play actions</div>
  </div>;
};

//Selector:
// pokud se zmeni state.parent.childRight nebo state.parent.root...
const parentSelector = createSelector<IRootState, IParentMapStateToProps, Array<string>, IParentSubState>(
  state => state.parent.childIds,
  state => state.parent.root,
  (childIds, par) => ({ textProp: par.text, childIds: childIds })
);

//...Parent komponenta re-rendruje ParentPresent komponentu
//Container
const Parent = connect<IParentMapStateToProps, IParentMapDispatchToProps, never>(
  (state: IRootState) => parentSelector(state),
  (dispatch: TDispatch) => ({ onClickProp: (ev?: React.SyntheticEvent) => { if (ev) ev.preventDefault(); return doParentAction(dispatch); } })
)(ParentPresent);


/***********************************************
              CHILD
***********************************************/

//************* DO_CHILD
interface IChildState { text: string; }

const childReducer = (state: IChildState, action: IDoChild): IChildState => {
  if (!state) return { text: `child ${action.id}` };
  switch (action.type) {
    case CHILD_ACT: return { text: state.text + ' x' };
    //case CHILD_ACT: return { text: action.asyncResult };
    default: return state;
  }
};

interface IChildMapStateToProps { textProp: string; }
interface IChildMapDispatchToProps { onClickProp: (ev?: React.SyntheticEvent) => IAsyncStartAction; }
interface IChildOwnProps { id: string; initState: IChildState }

const ChildPresent: React.StatelessComponent<IChildMapStateToProps & IChildMapDispatchToProps> = props => {
  console.log('render Child');
  return <h2 onClick={ev => props.onClickProp(ev)}>{props.textProp}</h2>;
};

const CHILD_ASYNC = 'CHILD_ASYNC'; interface IChildAsyncPar extends IAsyncProcPar { type: 'CHILD_ASYNC'; id: string; }
const dispatchChildActionStart = (dispatch: TDispatch, id: string) => dispatch(doAsyncAction({ type: CHILD_ASYNC, id: id } as IChildAsyncPar));

const CHILD_ACT = 'CHILD_ACT'; interface IDoChild extends IAsyncResultAction<string> { type: 'CHILD_ACT'; id: string }
const dispatchChildActionEnd = (dispatch: TDispatch, id: string, asyncResult?: string) => dispatch({ type: CHILD_ACT, id: id, asyncResult: asyncResult } as IDoChild);

addAsyncProc<IChildAsyncPar>(CHILD_ASYNC, (par, completed, api) => {
  dispatchCounterAction(api.dispatch);

  setTimeout(() => completed(() => {
    dispatchCounterAction(api.dispatch);
    dispatchChildActionEnd(api.dispatch, par.id);
  }), 500);
  //fetch('fetch-test.json').then(resp => resp.json()).then(res => completed(() => {
  //dispatchCounterAction(api.dispatch);
  //dispatchChildActionEnd(api.dispatch, par.id);
  //}));
});

const Child = connect<IChildMapStateToProps, IChildMapDispatchToProps, IChildOwnProps>(
  (state: IRootState, props: IChildOwnProps) => {
    const st = state.parent;
    if (!st.childs[props.id]) {
      st.childs[props.id] = props.initState;
      st.childIds.push(props.id);
    }
    return { textProp: st.childs[props.id].text }
  },
  (dispatch: TDispatch, props: IChildOwnProps) => ({ onClickProp: (ev?: React.SyntheticEvent) => { if (ev) ev.preventDefault(); return dispatchChildActionStart(dispatch, props.id); } })
)(ChildPresent);

/***********************************************
              COUNTER
***********************************************/

export type COUNTER = 'COUNTER'; export const COUNTER: COUNTER = 'COUNTER';
export interface ICounterAction extends Action { type: COUNTER; }
const dispatchCounterAction = (dispatch: TDispatch) => dispatch({ type: COUNTER } as ICounterAction);

interface ICounterState { count: number; }

interface ICounterMapStateToProps { counterProp: number; }

const counterReducer: (increment: number) => Reducer<ICounterState, ICounterAction> = increment => (state, action) => {
  if (!state) return { count: 0 };
  switch (action.type) {
    case COUNTER: return { count: state.count + increment };
    default: return state;
  }
};

const CounterPresent: React.StatelessComponent<ICounterMapStateToProps & IMapDispatchToProps> = props => {
  console.log('render Counter');
  return <h4 style={{ color: 'blue' }}>{props.counterProp}</h4>;
};

const Counter = connect<ICounterMapStateToProps, IMapDispatchToProps, never>(
  (state: IRootState) => ({ counterProp: state.counter.count })
)(CounterPresent);


/***********************************************
              APP
***********************************************/

declare module './types' {
  interface IRootState {
    parent?: IParentState;
    counter?: ICounterState;
  }
}

const appReducerFnc = (state: IRootState, action: any): IRootState => {
  return {
    parent: parentReducer(state.parent, action),
    counter: counterReducer(1)(state.counter, action),
  }
}


const rootReducer = (state: IRootState, action: any): IRootState => {
  return {
    ...blockGuiReducerFnc(state, action),
    ...appReducerFnc(state, action),
  };
}

export function init() {
  appInit(rootReducer, document.getElementById('content'), () => <Parent />);
}


////https://github.com/troch/path-parser
//interface IPth {
//  par1: string;
//  par2: string;
//  par3: string;
//  par4: Array<string>;
//}
//const p = new Path<IPth>('/a/:par1;par2<\\d+>?par3&par4[]');
//let url = p.test('/a/p1;par2=2?par4[]=p4&par3=p3');
//console.log(url);
//delete url.par3;
////delete url.par2; //ERROR
//url.par4 = ['v1', 'v2', 'v3'];
//let urlStr = p.build(url);
//url = p.test(urlStr);
//debugger;
//const pp = new Path<any>('/a/:par1;par2');
//urlStr = pp.build({ par1: '', par2: '' });
//url = pp.test(urlStr);
//debugger;

