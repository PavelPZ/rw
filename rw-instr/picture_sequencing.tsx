import { Page } from 'rw-course';
import ll from './picture_sequencing.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th11)}</h1>
  <p>{$l(l.tp1)}</p>
  <ol>
    <li>{$l(l.tli4)}</li>
    <li>{$l(l.tli5)}</li>
    <li>{$l(l.tli6)}</li>
    <li>{$l(l.tli7)}</li>
  </ol>
</Page>