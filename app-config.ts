namespace config {
  export interface IConfig {
    basicUrl: string;
    rootPath: string;
  }

  export const config: IConfig = {
    basicUrl: null,
    rootPath: null,
    route: {
      isHashRouter: true,
      initRoute: null,
    },
    login: {
      availableLogins: null,
      guiBreakpoint: 'xxs',
      loginRoute: null
    },
    serviceEmailerUrl: 'rw-lib/services/emailer.ashx'
  };

  (() => {
    const indexHtml = 'index.html';
    const startUrl = window.location.href;
    let idx = startUrl.toLowerCase().indexOf(indexHtml);
    config.basicUrl = idx >= 0 ? startUrl.substr(0, idx + indexHtml.length) : startUrl + indexHtml;
    config.rootPath = startUrl.substr(0, idx);
  })();

}
declare module "config" {
  export = config;
}
