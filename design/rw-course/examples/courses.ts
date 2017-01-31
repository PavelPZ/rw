//import { IMetaNode } from 'rw-course/dom-meta';
import ll from './courses.loc';
import crs1 from './course.meta';
import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const globId = toGlobId(__moduleName); const l = ll[globId];

const courses: DCourse.IMetaNode = {
  title: '',
  url: '',
  childs: [
    {
      title: $l(l.english),
      url: '',
      childs: [crs1]
    }
  ]
};

export default courses;