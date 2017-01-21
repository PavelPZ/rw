import { Page } from 'rw-course';
import ll from './single_choice.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th16)}</h1>
  <p>{$l(l.tp6)}</p>
  <ol>
    <li>{$l(l.tli24)}</li>
    <li>{$l(l.tli25)}</li>
  </ol>
</Page>