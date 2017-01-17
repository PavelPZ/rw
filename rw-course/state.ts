import { IConfig, config } from 'config';
import { IRootState } from 'rw-redux';
import * as dom from './dom';

declare module 'rw-redux' {
  interface IRootState {
    courses?: {
      [contextId: string]: ICourseState;
    }
  }
}

export interface ICourseNode {
  title: string;
  url: string;
  childs: Array<ICourseNode>; //in runtime: tree is encoded to ICourseNode.childIds and ICourseNode.parent
  passive: boolean; //passive page
  maxScore: number; //maximum reachable score for 100% success
  //runtime: 
  id: number; //ICourseNode.id forms continuous sequence of numbers, starting from zero (for root node)
  childIds: Array<number>;
  parent: number;
}

export interface ICourseState {
  //page
  pageUrl: string;
  pageEnter: number; //date-time of entering not evaluated page 
  /* results for eval controls, eval groups etc.
  - eval group: tagId='#eval-'<eval group id>, value is boolean
  - GapFill: value is string
  crsResult[]===pageResult for not modified result.
  - crsResult[] content is inSync with pageResult.
  - crsResult[] pointer is inSync during pageResult saving
  */
  pageResult: dom.pageResult; 
  /* results for other ICourseNode persistent data.
  content and pointer syncing see pageResult comment.
  */
  otherResults: { [url: string]: any; };
  //course
  crsUrl: string;
  crsTree: Array<ICourseNode>; //crsTree[x].id===x. crsTree[0] is course root node
  crsDir: { [url: string]: number; }; //get ICourseNode.id from ICourseNode.url
  crsResult: Array<dom.pageResult>;  //crsResult[x] is result proxy for node with ICourseNode.id===x
}

declare module 'config' {
  interface IConfig {
    course: {
    }
  }
}
