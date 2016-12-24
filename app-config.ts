namespace config {
  export interface IConfig {
    basicUrl: string;
  }

  const indexHtml = 'index.html'; const getBasicUrl = (startUrl: string) => { let idx = startUrl.toLowerCase().indexOf(indexHtml); return idx >= 0 ? startUrl.substr(0, idx + indexHtml.length) : startUrl + indexHtml; }

  export const config: IConfig = {
    basicUrl: getBasicUrl(window.location.href),
    route: {
      isHashRouter: true,
      initRoute: null,
    },
    login: {
      availableLogins: null,
      guiBreakpoint: 'xxs',
      loginRoute: null
    }
  }

}
declare module "config" {
  import _config = config;
  export = _config;
}
