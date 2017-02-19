import { Page } from 'rw-course';
import ll from './filling_in_from_a_list.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th113)}</h1>
  <p>{$l(l.tp18)}</p>
  <ol>
    <li>{$l(l.tli40)}</li>
    <li>{$l(l.tli41)}</li>
  </ol>
  <p>{$l(l.tp19)}</p>
  <ol>
    <li>{$l(l.tli42)}</li>
    <li>{$l(l.tli43)}</li>
    <li>{$l(l.tli44)}</li>
  </ol>
  <p>{$l(l.tp20)}</p>
</Page>