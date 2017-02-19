import { Page } from 'rw-course';
import ll from './filling_in.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th112)}</h1>
  <p>{$l(l.tp17)}</p>
  <ol>
    <li>{$l(l.tli38)}</li>
    <li>{$l(l.tli39)}</li>
  </ol>
</Page>