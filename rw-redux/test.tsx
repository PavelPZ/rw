import React from 'react';
import ReactDOM from 'react-dom';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

//******
import {
  blockGuiCreator, TBlockGuiPresent, startRecording, playRecording, Reducer, TDispatch, IMapDispatchToProps, appInit,
  makeAsync, getActState, blockGuiReducerFnc
} from 'rw-redux';

/***********************************************
              BLOCK GUI
***********************************************/
const BlockGuiPresent: TBlockGuiPresent = props => {
  console.log('render BlockGui');
  return props.show ? <h3 style={{ color: 'red' }}>Loading...</h3> : null;
};

const BlockGui = blockGuiCreator(BlockGuiPresent);

/***********************************************
              PARENT
***********************************************/

//************* parent state modifier by means of Action's and Reducer's
export interface IParentSubState { text: string; }
export interface IParentState { root: IParentSubState; childs: IChildSubState; childIds: Array<string> }
export interface IChildSubState { [id: string]: IChildState; }

interface IParentAction extends Action { type: 'PARENT_ACT'; } const PARENT_ACT = 'PARENT_ACT';

//https://gist.github.com/markerikson/ea4d0a6ce56ee479fe8b356e099f857e
//http://stackoverflow.com/questions/34427851/reducing-an-entire-subtree-with-redux-combinereducers
export function doParentAction(dispatch: TDispatch): Action { return dispatch({ type: PARENT_ACT }); }

const parentReducer: Reducer<IParentState, IParentAction | IChildAsyncEndAction | IChildAsyncStartAction> = (state = { root: { text: 'parent' }, childIds: [], childs: {} }, action) => {
  switch (action.type) {
    //case PARENT_ACT: return { root: { text: state.root.text + ' x' }, childs: state.childs, childIds: state.childIds };
    //case CHILD_ACT: return { root: state.root, childIds: state.childIds, childs: Object.assign({}, state.childs, { [action.id]: childReducer(state.childs[action.id], action) }) };
    case PARENT_ACT: return { ...state, ... ({ root: { text: state.root.text + ' x' } }) };
    case CHILD_ASYNC:
      childReducer(state.childs[action.id], action);
      return state;
    case CHILD_ACT: return { ...state, childs: { ...state.childs, [action.id]: childReducer(state.childs[action.id], action) } };
    default: return state;
  }
};

interface IParentMapStateToProps { textProp: string; childIds: Array<string> }
interface IParentMapDispatchToProps { onClickProp: (ev?: React.SyntheticEvent<any>) => any; }

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
    <div onClick={ev => { ev.preventDefault(); startRecording(); }}>Start recording</div>
    <div onClick={ev => { ev.preventDefault(); playRecording(); }}>Play actions</div>
  </div>;
};

//Selector:
// pokud se zmeni state.parent.childRight nebo state.parent.root...
const parentSelector = createSelector<DRedux.IRootState, IParentMapStateToProps, Array<string>, IParentSubState>(
  state => state.parent.childIds,
  state => state.parent.root,
  (childIds, par) => ({ textProp: par.text, childIds: childIds })
);

//...Parent komponenta re-rendruje ParentPresent komponentu
//Container
const Parent = connect<IParentMapStateToProps, IParentMapDispatchToProps, never>(
  (state: DRedux.IRootState) => parentSelector(state),
  (dispatch: TDispatch) => ({ onClickProp: (ev?: React.SyntheticEvent<any>) => { if (ev) ev.preventDefault(); return doParentAction(dispatch); } })
)(ParentPresent);


/***********************************************
              CHILD
***********************************************/

//************* DO_CHILD
export interface IChildState { text: string; }

const childReducer = (state: IChildState, action: IChildAsyncEndAction | IChildAsyncStartAction): IChildState => {
  if (!state) return { text: 'child ' + action.id };
  switch (action.type) {
    //case CHILD_ACT: return { text: action.asyncResult };
    case CHILD_ASYNC:
      makeAsync(action, new Promise<IChildAsyncEndAction>((resolve, reject) => setTimeout(() => resolve({ type: CHILD_ACT, id: action.id }), 500)));
      //onAsyncStart(action, { ...asyncActionEndProto, type: CHILD_ACT, id: action.id }, new Promise((resolve, reject) => setTimeout(() => resolve(), 500)));
      return state;
    case CHILD_ACT: return { text: state.text + ' x' };
    default: return state;
  }
};

interface IChildMapStateToProps { textProp: string; }
interface IChildMapDispatchToProps { onClickProp: (ev?: React.SyntheticEvent<any>) => IChildAsyncStartAction; }
interface IChildOwnProps { id: string; initState: IChildState }

const ChildPresent: React.StatelessComponent<IChildMapStateToProps & IChildMapDispatchToProps> = props => {
  console.log('render Child');
  return <h2 onClick={ev => props.onClickProp(ev)}>{props.textProp}</h2>;
};

const CHILD_ASYNC = 'CHILD_ASYNC'; interface IChildAsyncStartAction { type: 'CHILD_ASYNC'; id: string; }
const dispatchChildActionStart = (dispatch: TDispatch, id: string) => dispatch({ type: CHILD_ASYNC, id: id } as IChildAsyncStartAction);

const CHILD_ACT = 'CHILD_ACT'; interface IChildAsyncEndAction { type: 'CHILD_ACT'; id: string }

const Child = connect<IChildMapStateToProps, IChildMapDispatchToProps, IChildOwnProps>(
  (state: DRedux.IRootState, props: IChildOwnProps) => {
    const st = state.parent;
    if (!st.childs[props.id]) {
      st.childs[props.id] = props.initState;
      st.childIds.push(props.id);
    }
    return { textProp: st.childs[props.id].text }
  },
  (dispatch: TDispatch, props: IChildOwnProps) => ({ onClickProp: (ev?: React.SyntheticEvent<any>) => { if (ev) ev.preventDefault(); return dispatchChildActionStart(dispatch, props.id); } })
)(ChildPresent);

/***********************************************
              COUNTER
***********************************************/

export type COUNTER = 'COUNTER'; export const COUNTER: COUNTER = 'COUNTER';
export interface ICounterAction extends Action { type: COUNTER; }
const dispatchCounterAction = (dispatch: TDispatch) => dispatch({ type: COUNTER } as ICounterAction);

export interface ICounterState { count: number; }

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
  (state: DRedux.IRootState) => ({ counterProp: state.counter.count })
)(CounterPresent);


/***********************************************
              APP
***********************************************/

declare namespace DRedux {
  interface IRootState {
    parent?: IParentState;
    counter?: ICounterState;
  }
}
//declare module 'rw-redux' {
//  interface DRedux.IRootState {
//    parent?: IParentState;
//    counter?: ICounterState;
//  }
//}

const appReducerFnc = (state: DRedux.IRootState, action: any): DRedux.IRootState => {
  return {
    parent: parentReducer(state.parent, action),
    counter: counterReducer(1)(state.counter, action),
  }
}


const rootReducer = (state: DRedux.IRootState, action: any): DRedux.IRootState => {
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
