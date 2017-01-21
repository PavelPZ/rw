import { Page } from 'rw-course';
import ll from './sorting_into_groups_writing.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th110)}</h1>
  <p>{$l(l.tp13)}</p>
  <ol>
    <li>{$l(l.tli32)}</li>
    <li>{$l(l.tli33)}</li>
  </ol>
  <p>{$l(l.tp14)}</p>
</Page>