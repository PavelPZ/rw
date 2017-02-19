import { Page } from 'rw-course';
import ll from './vocabulary.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th124)}</h1>
  <p>{$l(l.tp33)}</p>
  <ol>
    <li>{$l(l.tli71)}</li>
    <li>{$l(l.tli72)}</li>
    <li>{$l(l.tli73)}</li>
  </ol>
</Page>