namespace config {
  export interface IConfig {
    basicUrl: string;
    rootPath: string;
    loc: string;
    serverRun: boolean;
  }

  export const config: IConfig = {
    loc: 'en-gb',
    basicUrl: null,
    rootPath: null,
    serverRun: typeof window == 'undefined',
    route: {
      isHashRouter: true,
      initRoute: null,
    },
    login: {
      availableLogins: null,
      guiBreakpoint: 'xxs',
      loginRoute: null
    },
    serviceEmailerUrl: 'rw-lib/services/emailer.ashx',
    course: {}
  };

  (() => {
    const indexHtml = '.html';
    if (config.serverRun) {
      config.rootPath = "file:///d:/rw/design/";
      return;
    }
    const startUrl = window.location.href;
    let idx = startUrl.toLowerCase().indexOf(indexHtml);
    config.basicUrl = idx >= 0 ? startUrl.substr(0, idx + indexHtml.length) : startUrl + indexHtml;
    config.rootPath = startUrl.substr(0, idx);
  })();

}
declare module "config" {
  export = config;
}
