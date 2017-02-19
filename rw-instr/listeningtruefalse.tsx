import { Page } from 'rw-course';
import ll from './listeningtruefalse.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th331)}</h1>
  <p>{$l(l.tp331)}</p>
  <ol>
    <li>{$l(l.tli331)}</li>
    <li>{$l(l.tli332)}</li>
    <li>{$l(l.tli333)}</li>
    <li>{$l(l.tli334)}</li>
    <li>{$l(l.tli335)}</li>
    <li>{$l(l.tli336)}</li>
    <li>{$l(l.tli337)}</li>
  </ol>
</Page>