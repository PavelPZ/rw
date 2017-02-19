import { Page } from 'rw-course';
import ll from './pairing.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th14)}</h1>
  <p>{$l(l.tp4)}</p>
  <ol>
    <li>{$l(l.tli16)}</li>
    <li>{$l(l.tli17)}</li>
    <li>{$l(l.tli18)}</li>
    <li>{$l(l.tli19)}</li>
  </ol>
</Page>