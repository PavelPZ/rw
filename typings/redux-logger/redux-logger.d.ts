import Redux from 'redux';

export = ReduxLogger.createLogger;

declare module ReduxLogger {
  export const createLogger: () => Redux.Middleware;
}
