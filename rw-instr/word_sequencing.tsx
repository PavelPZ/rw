import { Page } from 'rw-course';
import ll from './word_sequencing.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th12)}</h1>
  <p>{$l(l.tp2)}</p>
  <ol>
    <li>{$l(l.tli8)}</li>
    <li>{$l(l.tli9)}</li>
    <li>{$l(l.tli10)}</li>
    <li>{$l(l.tli11)}</li>
  </ol>
</Page>