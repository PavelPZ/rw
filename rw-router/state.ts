//https://lodash.com/docs/4.17.2
import valuesIn from 'lodash/valuesIn';
import isEqual from 'lodash/isEqual';

import { IRootState } from 'rw-redux/types';

//*****
import { IRouteData, IRouteDir } from './url-parser';

declare module '../rw-redux/types' {
  interface IRootState {
    router?: IRouteDir;
  }
}

export interface IDiffStateResult {
  changedRoots: Array<string>;
  changedAll: Array<string>;
  eq: Array<string>;
  newAll: Array<string>;
}

export function diff(oldRoot: IRouteDir, dest: IRouteDir /*already filtered by subRootPath*/, subRootPath: string): IDiffStateResult {
  if (!dest) dest = {};
  if (subRootPath) {
    const filteredOld = {};
    for (let p in oldRoot) if (p.startsWith(subRootPath)) filteredOld[p] = oldRoot[p];
    oldRoot = filteredOld;
  }
  const sortOldByDeep = (dir: IRouteDir) => { let nodes: Array<IRouteData> = valuesIn(dir); nodes.forEach((n: IRouteDataEx) => n.$deep = n.path.split('/').length); return nodes.sort((n1: IRouteDataEx, n2: IRouteDataEx) => n1.$deep - n2.$deep); };
  const nodes1 = sortOldByDeep(oldRoot); const nodes2 = valuesIn(dest) as Array<IRouteData>;
  //find changed nodes (parents separatelly)
  const res: IDiffStateResult = {
    changedRoots: [] as Array<string>,
    changedAll: [] as Array<string>,
    eq: [] as Array<string>,
    newAll: [] as Array<string>
  }
  nodes1.forEach(n1 => {
    if (res.changedRoots.find(path => n1.path.startsWith(path))) { res.changedAll.push(n1.path); return; } //add child of difference root (ancestor of n1 is different)
    const n2 = dest[n1.path]; if (!n2) throw new Error(`dest node does not exist in EQUAL subtree: ${n1.path}`);  //when could it happend?
    const as1 = n1.$asyncData; delete n1.$asyncData; //n1 could contain asyncData. Remove it for time of isEqual deep compare 
    try {
      if (isEqual(n1, n2)) { res.eq.push(n1.path); return; } //add the same nodes
    } finally {
      if (as1) n1.$asyncData = as1; 
    }
    res.changedRoots.push(n1.path); res.changedAll.push(n1.path); //add difference root
  });
  nodes2.forEach(n2 => {
    if (
      nodes1.length == 0 || //aspp start => empty old root
      res.changedRoots.find(changeRootPath => n2.path.startsWith(changeRootPath)) //childs of old change root: add to newAll
    ) res.newAll.push(n2.path); 
  });
  //clear;
  nodes1.forEach((n: IRouteDataEx) => delete n.$deep);
  return res;
}
export interface IRouteDataEx extends IRouteData {
  //working fields
  $deep?: number; //hloubka zanoreni
}
