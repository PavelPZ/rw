//inspired by D:\rw\convert-old-solution\Web4\Courses\GenCourseMeta.ts

export interface IMetaNode {
  title: string;
  url: string;
  childs?: Array<IMetaNode | string>;
  maxScore?: number;
}