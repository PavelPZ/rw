﻿import ll from './gap-fill.loc';

//******* CONST START
//import { IMetaNode } from 'rw-course';
import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const globId = toGlobId(__moduleName); const l = ll[globId]; const meta: DCourse.IMetaNode = { title: $l(l.title), url: globId }; export default meta;
//******* CONST END