import module1 from './index';
import ll from './course.loc';

import { IMetaNode } from 'rw-course/dom-meta'; import { $l, toGlobId } from "rw-lib/loc"; declare const __moduleName: string; const globId = toGlobId(__moduleName); const l = ll[globId];

const meta: IMetaNode = {
  title: $l(l.title),
  url: globId,
  childs: [
    module1
  ]
};

export default meta;