import { Page } from 'rw-course';
import ll from './readinggapfill.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th371)}</h1>
  <p>{$l(l.tp371)}</p>
  <ol>
    <li>{$l(l.tli371)}</li>
    <li>{$l(l.tli372)}</li>
    <li>{$l(l.tli373)}</li>
    <li>{$l(l.tli374)}</li>
  </ol>
</Page>