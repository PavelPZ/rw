import ll from './course.loc';

//import { IMetaNode } from 'rw-course';
import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const globId = toGlobId(__moduleName); const l = ll[globId];
const meta: DCourse.IMetaNode = {
  title: $l(l.title),
  url: globId
};

export default meta;
