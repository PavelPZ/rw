//*** Redux
//http://stackoverflow.com/questions/36730793/dispatch-action-in-reducer
//https://github.com/evgenyrodionov/redux-logger
//https://github.com/tappleby/redux-batched-subscribe
//https://github.com/reactjs/redux/issues/1171#issuecomment-205888533
//https://www.codeproject.com/Articles/1103559/How-Redux-works
//https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.j51l7utk9
//https://github.com/reactjs/reselect

import ReactDOM from 'react-dom';
import React from 'react';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { Action, Store, createStore, GenericStoreEnhancer, applyMiddleware } from 'redux';

//*****
import { asyncMiddleware, TReducer, TMiddleware, Middleware } from 'rw-redux';

//recording data
export let isRecording = { value: false };
export const recordedActions: { startStatus: {}; actions: Array<Action> } = { startStatus: {}, actions: [] }

//init app - called once
export function appInit(reducer: TReducer, element: Element, getComponent: () => JSX.Element, initState: DRedux.IRootState = {}): Store<any> {
  initData = {
    reducer: reducer,
    getComponent: getComponent,
    element: element,
  };
  let middles: Array<TMiddleware> = [asyncMiddleware];
  //middles.push(thunk);
  middles.push(createLogger());
  initData.middlewares = applyMiddleware.apply({}, middles);
  return changeAppInitState(initState);
}
export let store: Store<any>;
export const getActState = () => store.getState() as DRedux.IRootState;

//export function replaceReducer(reducer: Reducer<any>) {
//  store.replaceReducer(reducer);
//}

//create app store and run app. Can be called multipple times with another initStore. Used in replay actions
export function changeAppInitState(initState: any): Store<any> {
  const st = createStore(initData.reducer, initState, initData.middlewares);
  ReactDOM.unmountComponentAtNode(initData.element);
  ReactDOM.render(<Provider store={st}>{initData.getComponent()}</Provider>, initData.element);
  return store = st;
}

//vse potrebne pro vicenasobnou inicializaci aplikace (kvuli replay recorded actions)
let initData: {
  reducer?: TReducer; //redux store
  getComponent?: () => JSX.Element; //root component
  element?: Element; //app HTML element
  middlewares?: GenericStoreEnhancer; //applyMiddleware result
};

