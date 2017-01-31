import { IPtr } from 'rw-course';
//inspired by D:\rw\convert-old-solution\Web4\Courses\GenCourseMeta.ts
export interface IMetaNode extends IPtr {
  childs?: Array<IMetaNode | string>;
  maxScore?: number;
  flag?: TRuntimeType; // | Array<TRuntimeType>;
}

export type TRuntimeType = "modGrammar" | "mod" | "taskCourse" | "ex";