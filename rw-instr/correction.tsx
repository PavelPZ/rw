import { Page } from 'rw-course';
import ll from './correction.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th119)}</h1>
  <p>{$l(l.tp29)}</p>
  <ol>
    <li>{$l(l.tli59)}</li>
    <li>{$l(l.tli60)}</li>
  </ol>
</Page>