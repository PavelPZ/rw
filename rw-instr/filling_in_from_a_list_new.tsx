import { Page } from 'rw-course';
import ll from './filling_in_from_a_list_new.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th114)}</h1>
  <p>{$l(l.tp21)}</p>
  <ol>
    <li>{$l(l.tli45)}</li>
    <li>{$l(l.tli46)}</li>
  </ol>
  <p>{$l(l.tp22)}</p>
  <ol>
    <li>{$l(l.tli47)}</li>
    <li>{$l(l.tli48)}</li>
  </ol>
  <p>{$l(l.tp23)}</p>
</Page>