import { Page } from 'rw-course';
import ll from './dictation.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th118)}</h1>
  <p>{$l(l.tp27)}</p>
  <ol>
    <li>{$l(l.tli56)}</li>
    <li>{$l(l.tli57)}</li>
    <li>{$l(l.tli58)}</li>
  </ol>
  <p>{$l(l.tp28)}</p>
</Page>