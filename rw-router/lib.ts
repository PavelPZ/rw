//import { DRouter.IRouteData, DRouter.IRouteDir } from 'rw-router';

export function route<T extends DRouter.IRouteData>(data: T, childs?: { [hookId: string]: DRouter.IRouteData; }): DRouter.IRouteData { data.$childs = childs; return data; }

export function routeTreeToDir(root: DRouter.IRouteData, parentPath?: string): DRouter.IRouteDir {
  if (!root) return null;
  const toRouteStateInner = (route: DRouter.IRouteData, parentPath?: string, state?: DRouter.IRouteDir) => {
    if (!route) return;
    route.path = parentPath; state[route.path] = route;
    if (route.$childs) for (var p in route.$childs) toRouteStateInner(route.$childs[p], route.path + p + '/', state);
    return state;
  }
  if (!parentPath) parentPath = '/';
  const state = toRouteStateInner(root, parentPath, {});
  clearRoute(state);
  return state;
}

export function parentPath(state: DRouter.IRouteDir, path: string): string { return parentRoute(state, path).parent.path; }

function parentRoute(state: DRouter.IRouteDir, path: string): IParentRouteResult {
  const idx = path.substr(0, path.length - 1).lastIndexOf('/') + 1;
  return { hookId: path.substring(idx, path.length - 1), parent: state[path.substr(0, idx)] };
}
export interface IParentRouteResult { parent: DRouter.IRouteData; hookId: string; }

//odstrani z DRouter.IRouteData pomocne pracovni fields
function clearRoute(state: DRouter.IRouteDir) { for (let p in state) { delete state[p].$childs; } }; //delete state[p].$asyncData; } };

export function routeModify<T extends DRouter.IRouteData>(state: DRouter.IRouteDir, path: string, modify: (res:T) => void): T {
  const res = routeDirToTree<T>(state, path); modify(res); return res;
}

export function routeDirToTree<T extends DRouter.IRouteData>(state: DRouter.IRouteDir, path: string): T {
  //filter and clone
  if (!path) path = '/';
  const route: { [path: string]: DRouter.IRouteData; } = {};
  for (let p in state) if (p.startsWith(path)) route[p] = { ...state[p] };
  //denormalize filtered
  let root: DRouter.IRouteData;
  for (let p in route) {
    const nd = route[p];
    if (nd.path == path) { root = nd; continue; } //root route
    const pr = parentRoute(route, nd.path); //split path to parent path a hookId
    if (!pr.parent.$childs) pr.parent.$childs = {};
    pr.parent.$childs[pr.hookId] = nd; //bind child to parent
  }
  return root as T;
}