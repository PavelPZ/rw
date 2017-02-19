import { Page } from 'rw-course';
import ll from './listeninggapfill.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th351)}</h1>
  <p>{$l(l.tp351)}</p>
  <ol>
    <li>{$l(l.tli351)}</li>
    <li>{$l(l.tli352)}</li>
    <li>{$l(l.tli353)}</li>
    <li>{$l(l.tli354)}</li>
    <li>{$l(l.tli355)}</li>
    <li>{$l(l.tli356)}</li>
    <li>{$l(l.tli357)}</li>
  </ol>
</Page>