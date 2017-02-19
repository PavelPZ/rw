import { Page } from 'rw-course';
import ll from './sentence_sequencing_new.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th401)}</h1>
  <p>{$l(l.tp401)}</p>
  <ol>
    <li>{$l(l.tli401)}</li>
    <li>{$l(l.tli402)}</li>
    <li>{$l(l.tli403)}</li>
  </ol>
</Page>