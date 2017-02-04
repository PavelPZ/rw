import { MiddlewareAPI, Action, Dispatch } from 'redux';

export interface TAction extends Action { type: string; }
export type TMiddlewareAPI = MiddlewareAPI<DRedux.IRootState>;
export type Middleware<T extends TAction> = (middlAPI: TMiddlewareAPI) => (next: TDispatch) => (act: T) => void;
export type TMiddleware = Middleware<TAction>;
export type TDispatch = Dispatch<any>;
//export type TDispatch = TDispatchAction<Action>;
//export interface TDispatchAction<T extends Action> { (action: T): T; }
export type Reducer<S, A extends TAction> = (state: S, action: A) => S;
export type TReducer = Reducer<any, TAction>;
export interface IMapDispatchToProps { dispatch: TDispatch; }
export type TClickEvent = (ev?: React.SyntheticEvent<any>) => any; 
