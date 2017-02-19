import { Page } from 'rw-course';
import ll from './word_sequencing_new.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th411)}</h1>
  <p>{$l(l.tp411)}</p>
  <ol>
    <li>{$l(l.tli411)}</li>
    <li>{$l(l.tli412)}</li>
    <li>{$l(l.tli413)}</li>
  </ol>
</Page>