import { Page } from 'rw-course';
import ll from './speaking.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th391)}</h1>
  <p>{$l(l.tp391)}</p>
  <ol>
    <li>{$l(l.tli391)}</li>
    <li>{$l(l.tli392)}</li>
    <li>{$l(l.tli393)}</li>
  </ol>
</Page>