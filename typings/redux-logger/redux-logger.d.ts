/// <reference path="../redux/redux.d.ts" />

declare module "redux-logger" {
  const createLogger: () => Redux.Middleware;
  export = createLogger;
}
