import { Page } from 'rw-course';
import ll from './pairing_new.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th15)}</h1>
  <p>{$l(l.tp5)}</p>
  <ol>
    <li>{$l(l.tli20)}</li>
    <li>{$l(l.tli21)}</li>
    <li>{$l(l.tli22)}</li>
    <li>{$l(l.tli23)}</li>
  </ol>
</Page>