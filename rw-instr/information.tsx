import { Page } from 'rw-course';
import ll from './information.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th120)}</h1>
  <p>{$l(l.tp94)}</p>
</Page>