declare namespace DConfig {
  interface IConfig {
    route: {
      isHashRouter: boolean;
      initRoute: () => DRouter.IRouteDir;
    }
  }
}