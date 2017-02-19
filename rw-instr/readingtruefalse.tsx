import { Page } from 'rw-course';
import ll from './readingtruefalse.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th311)}</h1>
  <p>{$l(l.tp311)}</p>
  <ol>
    <li>{$l(l.tli311)}</li>
    <li>{$l(l.tli312)}</li>
    <li>{$l(l.tli313)}</li>
    <li>{$l(l.tli314)}</li>
  </ol>
</Page>