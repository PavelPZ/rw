import { Page } from 'rw-course';
import ll from './sentence_sequencing.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th1)}</h1>
  <p>{$l(l.tp)}</p>
  <ol>
    <li>{$l(l.tli)}</li>
    <li>{$l(l.tli1)}</li>
    <li>{$l(l.tli2)}</li>
    <li>{$l(l.tli3)}</li>
  </ol>
</Page>