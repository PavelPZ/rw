import { MiddlewareAPI, Action, Dispatch } from 'redux';

export type TMiddlewareAPI = MiddlewareAPI<DRedux.IRootState>;
export type Middleware<T extends Action> = (middlAPI: TMiddlewareAPI) => (next: TDispatch) => (act: T) => void;
export type TMiddleware = Middleware<Action>;
export type TDispatch = Dispatch<any>;
//export type TDispatch = TDispatchAction<Action>;
//export interface TDispatchAction<T extends Action> { (action: T): T; }
export type Reducer<S, A extends Action> = (state: S, action: A) => S;
export type TReducer = Reducer<any, Action>;
export interface IMapDispatchToProps { dispatch: TDispatch; }
export type TClickEvent = (ev?: React.SyntheticEvent<any>) => any;
