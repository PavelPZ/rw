import { IConfig, config } from '../app-config';

declare module '../app-config' {
  interface IConfig {
    route: {
      isHashRouter: boolean;
      initRoute: () => IRouteDir;
    }
  }
}

//Provadi konverzi IRouteNode tree do stringu a naopak.
//url je napr. "hand1;a=1;b=2/hand2;c=1;d=2$//ch1-hand3;e=1;f=2/hand31;c=1;d=2$//ch1-hand32;e=1;f=2$//ch2-hand33;g=1;h=2$/$//ch2-hand4;g=1;h=2"
//url koduje stromovou strukturu pomoci /...$/ zavorek
//v prikladu:
// - hand1 je RouteHandler.id, nasledovan je parametry route, tj.a = 1; b = 2. 
// - ch1-hand3: hand3 je identifikace handleru (RouteHandler.id), ch1 je hookId
// - zanoruje se pomoci IRouteData.path, ve ktere je <hookId>/<hookId>/...


export interface IRouteData {
  handlerId: string; //handler id for route management
  path?: string; //path, e.g. '/' for root, '//' for root.child, /ch1/ for root.childs['ch1'] etc.
  //helper fields for route manipulation
  $asyncData?: any; //data, added during prepare
  $childs?: { [hookId:string]: IRouteData; };
}

//normalized redux route state
export interface IRouteDir {
  [path: string]: IRouteData;
}

export const route2string = (route: IRouteDir) => {
  if (!route) route = config.route.initRoute();
  let urlStr = encodeUrlLow(route);
  return config.basicUrl + (urlStr ? (config.route.isHashRouter ? '#' : '?') + urlStr : '');
}

export const string2route = (url: string, normalizeStringProps: (props: IRouteData) => void) => {
  if (!url.toLowerCase().startsWith(config.basicUrl)) return null; //throw new Error(`location.href does not start with ${config.basicUrl}`);
  url = clearSlashes(url.substr(config.basicUrl.length)); if (!url) return null;
  if (!config.route.isHashRouter) url = url.split('#')[0]; //odrizni # pro not hash route
  return decodeUrlLow(url, normalizeStringProps);
}

const clearSlashes = (path: string) => { return path.replace(/\/$/, '').replace(/^[\#\/\?]?/, ''); }

// ENCODE
const encodeUrlLow = (state: IRouteDir) => {
  interface IRouteDataEx extends IRouteData { $chlds: Array<IRouteDataEx>; $hookId: string; }

  //denormalize route state to tree
  const route: { [path: string]: IRouteDataEx; } = state as any; let root: IRouteDataEx;
  for (let p in route) route[p].$chlds = [];
  for (let p in route) {
    const nd = route[p]; nd.$hookId = '';
    if (nd.path == '/') { root = nd; continue; }
    const idx = nd.path.substr(0, nd.path.length - 1).lastIndexOf('/') + 1;
    nd.$hookId = nd.path.substring(idx, nd.path.length-1);
    const parent = route[nd.path.substr(0, idx)];
    parent.$chlds.push(nd);
  }
  //const d = JSON.stringify(root, null, 2);
  //debugger;
  //*** encode
  const routeParIgnores = ['path', 'handlerId', '$childs', '$hookId', '$asyncData', '$chlds'];

  const doEncode = (res: Array<string>, st: IRouteDataEx) => {
    res.push((st.$hookId ? st.$hookId + '-' : '') + (st.handlerId ? st.handlerId : ''));
    //props name
    let props = [];
    for (let p in st) if (routeParIgnores.indexOf(p) < 0) props.push(p);
    //encode props
    props.sort().forEach(p => res.push(`;${p}=${encodeURIComponent(st[p])}`));
    const childs = st.$chlds.sort((ch1, ch2) => ch1 < ch2 ? 1 : -1);
    childs.forEach(subSt => {
      res.push('/');
      doEncode(res, subSt);
      res.push('$/');
    });
  }

  //DO
  const res: Array<string> = [];
  doEncode(res, root);

  //clear working fields
  for (let p in route) { delete route[p].$chlds; delete route[p].$hookId; }

  //return
  return clearSlashes(res.join('').replace(/(\$\/)*$/g, ''));
}

// DECODE
const decodeUrlLow = (url: string, normalizeStringProps: (props: IRouteData) => void) => {

  const resRoutes: Array<IRouteData> = [];

  interface IDecodeStack {
    openIdx: number; //pozice zacatku parametru IRouteNode
    route?: IRouteData; //
    hookId?: string;
    parent: IDecodeStack;
  }

  //parse string between st.openIdx and endIdx-1
  const parseRoute = (endIdx: number, st: IDecodeStack) => {
    const s = url.substring(st.openIdx, endIdx - 1); //e.g. 'ch1-hand32;e=1;f=2'
    const parts = s.split(';');
    const propComp = parts[0].split('-'); if (propComp.length > 2) throw new Error('propComp.length > 2');
    st.hookId = propComp.length == 1 ? '' : propComp[0];
    st.route = {
      path: st.parent ? st.parent.route.path + st.hookId + '/' : '/',
      handlerId: propComp.length == 1 ? propComp[0] : propComp[1]
    }
    resRoutes.push(st.route);
    for (let i = 1; i < parts.length; i++) {
      const nv = parts[i].split('=');
      st.route[nv[0]] = decodeURIComponent(nv[1]);
    }
    if (normalizeStringProps) normalizeStringProps(st.route);
  };

  //TODO: patri jinam
  //if (!$isHashRouter) url = url.split('#')[0]; //odrizni # pro not hash route

  url = '{' + url.replace(/\$\//g, '}').replace(/\//g, '{'); //nahrad /...$/ zavorky by {}
  const stack: Array<IDecodeStack> = []; let pos = 0; let ch: string;

  while (true) {
    //add missing final } bracket
    if (pos >= url.length) {
      if (stack.length >= 1) ch = '}'; else break;
      pos = url.length + 1;
    } else {
      ch = url.charAt(pos); pos++;
    }
    //parse
    switch (ch) {
      case '{':
        //root: init stack and its openIdx
        if (stack.length == 0) { stack.push({ openIdx: pos, parent: null }); break; }
        //zacatek dalsiho zanoreni, dopln doposud posledni stack
        const last = stack[stack.length - 1];
        if (!last.route) parseRoute(pos, last); //zpracuj sekvenci mezi {xxxx{
        //zacni novy stack
        stack.push({ openIdx: pos, parent: last });
        break;
      case '}': //konec zanoreni
        if (stack.length == 0) break; //hotovo
        const last2 = stack[stack.length - 1];
        if (!last2.route) parseRoute(pos, last2); //zpracuj sekvenci mezi {xxxx}, xxx je bez { } zavorek
        //vyndej ze stacku
        stack.splice(stack.length - 1, 1);
        break;
    }
  }

  const res: IRouteDir = {};
  resRoutes.forEach(n => res[n.path] = n);
  return res;
};

export const test = () => {
  const src = 'hand1;a=1;b=2/hand2;c=1;d=2$//ch1-hand3;e=1;f=2/hand31;c=1;d=2$//ch1-hand32;e=1;f=2$//ch2-hand33;g=1;h=2$/$//ch2-hand4;g=1;h=2';
  const res = decodeUrlLow(src, null);
  const json = JSON.stringify(res, null, 2);
  const url = encodeUrlLow(res);
  if (url != src) alert('url != src');
  debugger;
}
