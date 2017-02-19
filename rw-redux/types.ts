import { MiddlewareAPI, Action, Dispatch } from 'redux';

export interface TAction extends Action { type: string; }
export type TMiddlewareAPI = MiddlewareAPI<DRedux.IRootState>;
export type Middleware<T extends TAction> = (middlAPI: TMiddlewareAPI) => (next: TDispatch) => (act: T) => void;
export type TMiddleware = Middleware<TAction>;
export type TDispatch = Dispatch<DRedux.IRootState>;
export type Reducer<S, A extends TAction> = (state: S, action: A) => S;
export type TReducer = Reducer<DRedux.IRootState, TAction>;
export interface IMapDispatchToProps { dispatch: TDispatch; }
