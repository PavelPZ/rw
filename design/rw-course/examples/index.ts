import ll from './index.loc';
import gapFill from './gap-fill.meta';

//import { IMetaNode } from 'rw-course/dom-meta';
import { $l, toGlobId } from "rw-lib/loc"; declare const __moduleName: string; const globId = toGlobId(__moduleName); const l = ll[globId];

const sitemap: DCourse.IMetaNode = {
  title: $l(l.title),
  url: globId,
  childs: [
    gapFill
  ]
};

export default sitemap;