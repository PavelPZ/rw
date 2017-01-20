import ll from "./gap-fill.loc";

//******* CONST START
import { IMetaNode } from 'rw-course/dom-meta'; import { $l, toGlobId } from "rw-lib/loc"; declare const __moduleName: string; const globId = toGlobId(__moduleName); const l = ll[globId]; const meta: IMetaNode = { title: $l(l.title), url: globId }; export default meta;
//******* CONST END