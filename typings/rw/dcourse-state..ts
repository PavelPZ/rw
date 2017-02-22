
//********** DCOURSE STATE
declare namespace DCourse {
  //inspired by D:\rw\convert-old-solution\Web4\Courses\GenCourseMeta.ts
  interface IMetaNode extends IPtr {
    childs?: Array<IMetaNode | string>;
    maxScore?: number;
    flag?: TMetaFlag; // | Array<TRuntimeType>;
  }

  export type TMetaFlag = "modGrammar" | "mod" | "taskCourse" | "ex";

  export interface ICoursesState { [contextId: string]: ICourseState; } //contextId - <userEmail>#<courseUrl>#<attemptId>

  export interface ICourseState extends ICourseNavigData, IPagesState {
    //userEmail: string; //unique user email
    //courseUrl: string; //unique course ID
    //attemptId: string; //more attempts for single course
    //pageUrl: string; //aktualni stranka
    //userCourse?: { [pageUrl: string]: DCourse.IFlagResult; }
  }

  export interface ICourseNavigData extends ICourseContext {
    //userEmail: string; //unique user email
    //courseUrl: string; //unique course ID
    //attemptId: string; //more attempts for single course
    pageUrl: string; //aktualni stranka
  }

  export interface ICourseContext {
    userEmail: string; //unique user email
    courseUrl: string; //unique course ID. Could be empty => work with page without course
    skipCourseSitemap: boolean; //courseUrl not empty: do not use need sitemap
    attemptId: string; //in case of more attempts for single course
  }

  //short results for whole course (act page could have long result in userCourse included)
  export interface IPagesState {
    attemptId: string;
    userCourse?: { [pageUrl: string]: DCourse.IFlagResult; }
  }

}