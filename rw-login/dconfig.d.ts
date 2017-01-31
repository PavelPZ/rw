declare namespace DConfig {
  interface IConfig {
    login: {
      loginRoute: () => DRouter.IRouteData;
      availableLogins: Array<string>;
      guiBreakpoint: keyof DRedux.IMatchMediaState;
    }
  }
}