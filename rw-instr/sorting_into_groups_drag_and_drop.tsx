import { Page } from 'rw-course';
import ll from './sorting_into_groups_drag_and_drop.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th111)}</h1>
  <p>{$l(l.tp15)}</p>
  <ol>
    <li>{$l(l.tli34)}</li>
    <li>{$l(l.tli35)}</li>
    <li>{$l(l.tli36)}</li>
    <li>{$l(l.tli37)}</li>
  </ol>
  <p>{$l(l.tp16)}</p>
</Page>