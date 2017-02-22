const config: DConfig.IConfig = {
  initLoc: 'cs-cz',
  basicUrl: null,
  rootPath: null,
  serverRun: typeof window == 'undefined', //nodejs design run 
  route: {
    isHashRouter: true,
    initRoute: null,
  },
  login: {
    availableLogins: ['google', 'facebook','msoft'],
    loginRoute: null
  },
  serviceEmailerUrl: 'rw-lib/services/emailer.ashx',
  course: {
    coursesUrl: '/rw-course/examples/courses'
  }
};

(() => {
  const indexHtml = '.html';
  if (config.serverRun) {
    config.rootPath = "file:///d:/rw/design/"; //nodejs design path
    return;
  }
  const startUrl = window.location.href;
  let idx = startUrl.toLowerCase().indexOf(indexHtml);
  config.basicUrl = idx >= 0 ? startUrl.substr(0, idx + indexHtml.length) : startUrl + indexHtml;
  config.rootPath = startUrl.substr(0, idx);
  idx = config.rootPath.lastIndexOf('/');
  config.rootPath = config.rootPath.substr(0, idx + 1);
})();

export default config;
