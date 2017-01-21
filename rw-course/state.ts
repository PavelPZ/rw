import { Action } from 'redux';

import { IConfig, config } from 'config';
import { IRootState, TDispatch, IAsyncProcPar, doAsyncAction, addAsyncProc, IAsyncResultAction } from 'rw-redux';
import * as dom from './dom';

declare module 'rw-redux' {
  interface IRootState {
    courses?: ICoursesState
  }
}

export interface ICoursesState { [contextId: string]: ICourseState; } //contextId - <userEmail>#<courseUrl>#<attemptId>
const toContextId = (ctx: ICourseContext) => `${ctx.userEmail ? ctx.userEmail : ''}#${ctx.courseUrl ? ctx.courseUrl : ''}#${ctx.attemptId ? ctx.attemptId : ''}`;
const fromContextId = (str: string) => { const parts = str.split('#'); const n = (v: string) => v ? v : null; return { userEmail: n(parts[0]), courseUrl: n(parts[1]), attemptId: n(parts[2])} as ICourseContext};

export interface ICourseState extends ICourseNavigData, IPagesState {
  //userEmail: string; //unique user email
  //courseUrl: string; //unique course ID
  //attemptId: string; //more attempts for single course
  //pageUrl: string; //aktualni stranka
  //userCourse?: { [pageUrl: string]: dom.IFlagResult; }
}

export interface ICourseNavigData extends ICourseContext {
  //userEmail: string; //unique user email
  //courseUrl: string; //unique course ID
  //attemptId: string; //more attempts for single course
  pageUrl: string; //aktualni stranka
}
const eqNavigData = (dt1: ICourseNavigData, dt2: ICourseNavigData) => dt1.pageUrl === dt2.pageUrl && dt1.userEmail === dt2.userEmail && dt1.courseUrl === dt2.courseUrl && dt1.attemptId === dt2.attemptId;

export interface ICourseContext {
  userEmail: string; //unique user email
  courseUrl: string; //unique course ID
  attemptId: string; //more attempts for single course
}

//short results for all course (act page could have long result in userCourse included)
export interface IPagesState {
  userCourse?: { [pageUrl: string]: dom.IFlagResult; }
}

//const getPageState = (state: IRootState, props: dom.IPageProps) => state.courses[props.courseUrl].pageResult;

const COURSE_NAVIG_ASYNC = 'COURSE_NAVIG_ASYNC'; interface ICourseNavigAsyncPar extends IAsyncProcPar { type: 'COURSE_NAVIG_ASYNC'; data: ICourseNavigData }
export const courseNavigAction = (dispatch: any, data: ICourseNavigData, ev?: React.SyntheticEvent<any>) => { if (ev) ev.preventDefault(); dispatch(doAsyncAction({ type: COURSE_NAVIG_ASYNC, data: data } as ICourseNavigAsyncPar)); };
export type TCourseNavigClick = (data: ICourseNavigData, ev?: React.SyntheticEvent<any>) => void;

const COURSE_NAVIG_END = 'COURSE_NAVIG_END'; interface ICourseNavigActionEnd extends IAsyncResultAction<ICourseNavigAsyncResult> { type: 'COURSE_NAVIG_END'; data: ICourseNavigData }
const courseNavigActionEnd = (dispatch: TDispatch, data: ICourseNavigData, asyncResult?: ICourseNavigAsyncResult) => dispatch({ type: COURSE_NAVIG_END, data: data, asyncResult: asyncResult } as ICourseNavigActionEnd);
interface ICourseNavigAsyncResult extends IPagesState {
  userPage: dom.IPageResult;
}

const courseNavigReducer = (state: ICourseState, action: ICourseNavigActionEnd): ICourseState => {
  if (!state) return {} as any;
  switch (action.type) {
    case COURSE_NAVIG_END:
      if (!action.data) return {} as any;
      if (eqNavigData(state, action.data)) return state;
      var res: ICourseState = { ...action.data, userCourse: action.asyncResult.userCourse };
      if (!res.userCourse) res.userCourse = {};
      if (action.asyncResult.userPage) res.userCourse[res.pageUrl] = action.asyncResult.userPage;
      return res;
    default: return state;
  }
};

addAsyncProc<ICourseNavigAsyncPar>(COURSE_NAVIG_ASYNC, (par, completed, api) => {
  //dispatchCounterAction(api.dispatch);

  setTimeout(() => completed(() => {
    courseNavigActionEnd(api.dispatch, par.data);
  }), 500);
  //fetch('fetch-test.json').then(resp => resp.json()).then(res => completed(() => {
  //dispatchCounterAction(api.dispatch);
  //dispatchChildActionEnd(api.dispatch, par.id);
  //}));
});

const stateLib = {

};

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

export interface ICourseState_ {
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
  pageResult: dom.IPageResult;
  /* results for other ICourseNode persistent data.
  content and pointer syncing see pageResult comment.
  */
  otherResults: { [url: string]: any; };
  //course
  crsUrl: string;
  crsTree: Array<ICourseNode>; //crsTree[x].id===x. crsTree[0] is course root node
  crsDir: { [url: string]: number; }; //get ICourseNode.id from ICourseNode.url
  crsResult: Array<dom.IPageResult>;  //crsResult[x] is result proxy for node with ICourseNode.id===x
}

declare module 'config' {
  interface IConfig {
    course: {
    }
  }
}
