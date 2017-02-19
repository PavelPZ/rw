import { Page } from 'rw-course';
import ll from './multiple_choice_two_states.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th19)}</h1>
  <p>{$l(l.tp11)}</p>
  <ol>
    <li>{$l(l.tli30)}</li>
    <li>{$l(l.tli31)}</li>
  </ol>
  <p>{$l(l.tp12)}</p>
</Page>