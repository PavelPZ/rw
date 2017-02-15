declare namespace DConfig {
  export interface IConfig {
    basicUrl: string;
    rootPath: string;
    initLoc: string;
    serverRun: boolean;
  }
}

declare namespace DConfig {
  interface IConfig {
    route: {
      isHashRouter: boolean;
      initRoute: () => DRouter.IRouteDir;
    }
  }
}

declare namespace DConfig {
  interface IConfig {
    login: {
      loginRoute: () => DRouter.IRouteData;
      availableLogins: Array<string>;
      guiBreakpoint: keyof DRedux.IMatchMediaState;
    }
  }
}

declare namespace DConfig {
  interface IConfig {
    course: {
      coursesUrl: string;
    }
  }
}