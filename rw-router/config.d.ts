declare namespace config {
  interface IConfig {
    route: {
      isHashRouter: boolean;
      initRoute: () => IRouteDir;
    }
  }
}