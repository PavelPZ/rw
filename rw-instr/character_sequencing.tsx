import { Page } from 'rw-course';
import ll from './character_sequencing.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th13)}</h1>
  <p>{$l(l.tp3)}</p>
  <ol>
    <li>{$l(l.tli12)}</li>
    <li>{$l(l.tli13)}</li>
    <li>{$l(l.tli14)}</li>
    <li>{$l(l.tli15)}</li>
  </ol>
</Page>