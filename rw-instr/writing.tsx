import { Page } from 'rw-course';
import ll from './writing.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th381)}</h1>
  <p>{$l(l.tp381)}</p>
  <ol>
    <li>{$l(l.tli381)}</li>
    <li>{$l(l.tli382)}</li>
  </ol>
</Page>