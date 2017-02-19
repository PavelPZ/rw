//https://lodash.com/docs/4.17.2
import valuesIn from 'lodash/valuesIn';
import isEqual from 'lodash/isEqual';

//import { DRedux.IRootState } from 'rw-redux';

//*****
//import { DRouter.IRouteData, DRouter.IRouteDir } from 'rw-router';

//declare module 'rw-redux' {
//  interface DRedux.IRootState {
//    router?: DRouter.IRouteDir;
//  }
//}

export interface IDiffStateResult {
  modifiedRoots: Array<string>; //root of changed node
  modified: Array<string>; //modified: changedRoots plus its descendants
  preserved: Array<string>; //eq node
  newOrModified: Array<string>; //new or modified nodes
}

export function diff(oldRoute: DRouter.IRouteDir /*all old nodes*/, newRoute: DRouter.IRouteDir /*new nodes, already filtered by subRootPath*/, subRootPath: string): IDiffStateResult {
  if (!newRoute) newRoute = {};
  const res: IDiffStateResult = {
    modifiedRoots: [], // as Array<string>,
    modified: [], // as Array<string>,
    preserved: [], // as Array<string>,
    newOrModified: [], // as Array<string>
  }
  //filter oldRoute by subRootPath
  if (subRootPath) {
    const filteredOld = {};
    for (let p in oldRoute) if (p.startsWith(subRootPath)) filteredOld[p] = oldRoute[p]; else res.preserved.push(p);
    oldRoute = filteredOld;
  }
  const sortOldByDeep = (oldRoot: DRouter.IRouteDir) => { let nodes: Array<DRouter.IRouteData> = valuesIn(oldRoot); nodes.forEach((n: IRouteDataEx) => n.$deep = n.path.split('/').length); return nodes.sort((n1: IRouteDataEx, n2: IRouteDataEx) => n1.$deep - n2.$deep); };
  const oldNodes = sortOldByDeep(oldRoute);
  const newNodes = valuesIn(newRoute) as Array<DRouter.IRouteData>;

  //node is changed iff it is "not equal" or "its parent is in changedRoots"
  oldNodes.forEach(oldNode => {
    if (res.modifiedRoots.find(path => oldNode.path.startsWith(path))) { res.modified.push(oldNode.path); return; } //child of changed node is also changed node
    const newNode = newRoute[oldNode.path]; if (!newNode) throw new Error(`dest node does not exist in EQUAL subtree: ${oldNode.path}`);  //when could it happend?

    if (isEqual(oldNode, newNode)) { res.preserved.push(oldNode.path); return; } //the node is same = no changedRoots push

    //const asyncData = oldNode.$asyncData; delete oldNode.$asyncData; //n1 could contain asyncData. Remove it for time of isEqual deep compare 
    //try {
    //  if (isEqual(oldNode, newNode)) { res.eq.push(oldNode.path); return; } //the node is same = no changedRoots push
    //} finally {
      //if (asyncData) oldNode.$asyncData = asyncData; 
    //}
    res.modifiedRoots.push(oldNode.path); res.modified.push(oldNode.path); //add difference root
  });
  //node is new or modified iff "its parent or self is in changedRoots"
  newNodes.forEach(newNode => {
    if (
      oldNodes.length == 0 || //aspp start => empty old root
      res.modifiedRoots.find(changeRootPath => newNode.path.startsWith(changeRootPath)) //childs of old change root: add to newAll
    ) res.newOrModified.push(newNode.path); 
  });
  //clear;
  oldNodes.forEach((n: IRouteDataEx) => delete n.$deep);
  return res;
}
interface IRouteDataEx extends DRouter.IRouteData { //fake interface for accessing $deep working field
  //working fields
  $deep?: number; //hloubka zanoreni
}
