import React from 'react';
import { Action } from 'redux';

import config from 'rw-config';
import { TDispatch, onAsyncStart, IAsyncEndAction, IAsyncStartAction, getActState, asyncActionStartProto, asyncActionEndProto, Reducer } from 'rw-redux';
import { routerCHANGE_END, IRouteChangeEndAction, RouteHandler } from 'rw-router';
import { loadCourse, PageLoader } from 'rw-course';

const toContextId = (ctx: DCourse.ICourseContext) => `${ctx.userEmail ? ctx.userEmail : ''}#${ctx.courseUrl ? ctx.courseUrl : ''}#${ctx.attemptId ? ctx.attemptId : ''}`;
const fromContextId = (str: string) => { const parts = str.split('#'); const n = (v: string) => v ? v : null; return { userEmail: n(parts[0]), courseUrl: n(parts[1]), attemptId: n(parts[2])} as DCourse.ICourseContext};

const eqNavigData = (dt1: DCourse.ICourseNavigData, dt2: DCourse.ICourseNavigData) => dt1.pageUrl === dt2.pageUrl && dt1.userEmail === dt2.userEmail && dt1.courseUrl === dt2.courseUrl && dt1.attemptId === dt2.attemptId;

const COURSE_NAVIG_ASYNC = 'COURSE_NAVIG_ASYNC'; interface ICourseNavigAsyncPar extends IAsyncStartAction { type: 'COURSE_NAVIG_ASYNC'; data: DCourse.ICourseNavigData }
export const courseNavigAction = (dispatch: any, data: DCourse.ICourseNavigData, ev?: React.SyntheticEvent<any>) => { if (ev) ev.preventDefault(); dispatch({ ...asyncActionStartProto, type: COURSE_NAVIG_ASYNC, data: data } as ICourseNavigAsyncPar) };
export type TCourseNavigClick = (data: DCourse.ICourseNavigData, ev?: React.SyntheticEvent<any>) => void;

const COURSE_NAVIG_END = 'COURSE_NAVIG_END'; interface ICourseNavigActionEnd extends IAsyncEndAction { type: 'COURSE_NAVIG_END'; data: DCourse.ICoursesState }
const courseNavigActionEnd = (dispatch: TDispatch, data: DCourse.ICoursesState) => dispatch({ ...asyncActionEndProto, type: COURSE_NAVIG_END, data: data } as ICourseNavigActionEnd);
interface ICourseNavigAsyncResult extends DCourse.IPagesState {
  userPage: DCourse.IPageResult;
}

const courseReducer = (state: DCourse.ICoursesState, action: ICourseNavigActionEnd | IRouteChangeEndAction): DCourse.ICoursesState => {
  if (!state) return {} as any;
  switch (action.type) {
    case COURSE_NAVIG_END:
      return action.data;
      //if (eqNavigData(state, action.data)) return state;
      //var res: DCourse.ICourseState = { ...action.data, userCourse: action.asyncResult.userCourse };
      //if (!res.userCourse) res.userCourse = {};
      //if (action.asyncResult.userPage) res.userCourse[res.pageUrl] = action.asyncResult.userPage;
      //return res;
    case routerCHANGE_END:
      const reducData = action.asyncResult.forHandlerReducers[COURSE_ROOT]; if (!reducData) return state;
      if (reducData.length > 1) throw new Error('reducData.length > 1'); //only single course route
      const route = action.asyncResult.newRoute[reducData[0]] as ICourseRoute;
      const newState = route.$asyncData; delete route.$asyncData;
      return newState;
    default: return state;
  }
};

//addAsyncProc<ICourseNavigAsyncPar>(COURSE_NAVIG_ASYNC, (par, completed, api) => {
//  loadCourse(par.data, (api.getState() as DRedux.IRootState).courses).then(newState => {
//    courseNavigActionEnd(api.dispatch, newState);
//  });
  //dispatchCounterAction(api.dispatch);

  //setTimeout(() => completed(() => {
  //  courseNavigActionEnd(api.dispatch, par.data);
  //}), 500);
  //fetch('fetch-test.json').then(resp => resp.json()).then(res => completed(() => {
  //dispatchCounterAction(api.dispatch);
  //dispatchChildActionEnd(api.dispatch, par.id);
  //}));
//});

//export interface ICourseNode {
//  title: string;
//  url: string;
//  childs: Array<ICourseNode>; //in runtime: tree is encoded to ICourseNode.childIds and ICourseNode.parent
//  passive: boolean; //passive page
//  maxScore: number; //maximum reachable score for 100% success
//  //runtime: 
//  id: number; //ICourseNode.id forms continuous sequence of numbers, starting from zero (for root node)
//  childIds: Array<number>;
//  parent: number;
//}

//export interface ICourseState_ {
//  //page
//  pageUrl: string;
//  pageEnter: number; //date-time of entering not evaluated page 
//  /* results for eval controls, eval groups etc.
//  - eval group: tagId='#eval-'<eval group id>, value is boolean
//  - GapFill: value is string
//  crsResult[]===pageResult for not modified result.
//  - crsResult[] content is inSync with pageResult.
//  - crsResult[] pointer is inSync during pageResult saving
//  */
//  pageResult: DCourse.IPageResult;
//  /* results for other ICourseNode persistent data.
//  content and pointer syncing see pageResult comment.
//  */
//  otherResults: { [url: string]: any; };
//  //course
//  crsUrl: string;
//  crsTree: Array<ICourseNode>; //crsTree[x].id===x. crsTree[0] is course root node
//  crsDir: { [url: string]: number; }; //get ICourseNode.id from ICourseNode.url
//  crsResult: Array<DCourse.IPageResult>;  //crsResult[x] is result proxy for node with ICourseNode.id===x
//}

export const courseReducerFnc = (state: DRedux.IRootState, action: IRouteChangeEndAction): DRedux.IRootState => {
  return {
    courses: courseReducer(state.courses, action)
  }
}

//const courseReducer: Reducer<DCourse.ICoursesState, IDoRouteChangeEnd> = (state, action) => {
//  if (!state) return {};
//  switch (action.type) {
//    case routerCHANGE_END:
//      const reducData = action.forHandlerReducers['']; if (!reducData) return state;
//      //course route modified
//      if (reducData.length > 1) throw new Error('reducData.length > 1'); //only single course route 
//      const route = action.newRoute[reducData[0]] as ICourseRoute;
//      //TODO: modify course state from async route data 
//      delete route.$asyncData;
//      return state;
//    default: return state;
//  }
//};


//course route
const COURSE_ROOT = 'course';
export interface ICourseRoute extends DRouter.IRouteData, DCourse.ICourseNavigData {
  handlerId: 'course';
  $asyncData?: DCourse.ICoursesState;
}
//course route async data 
//interface ICourseRouteAsync {
//}


class RootHandler extends RouteHandler<ICourseRoute> {
  prepare(route: ICourseRoute): Promise<DCourse.ICoursesState> {
    return loadCourse(route, null/*TODO Courses state*/);
  }
  unPrepare(route: ICourseRoute): Promise<never> {
    //TODO: save course data - what about saving course data in loadCourse?
    return null;
  }
  createComponent(routeData: ICourseRoute): JSX.Element {
    return null; //<PageLoader/>;
  }
}
new RootHandler(COURSE_ROOT);

