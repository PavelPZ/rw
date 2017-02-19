import { Page } from 'rw-course';
import ll from './yes_no_questions.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th117)}</h1>
  <p>{$l(l.tp26)}</p>
  <ol>
    <li>{$l(l.tli54)}</li>
    <li>{$l(l.tli55)}</li>
  </ol>
</Page>