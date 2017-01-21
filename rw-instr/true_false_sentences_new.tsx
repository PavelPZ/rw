import { Page } from 'rw-course';
import ll from './true_false_sentences_new.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th116)}</h1>
  <p>{$l(l.tp25)}</p>
  <ol>
    <li>{$l(l.tli52)}</li>
    <li>{$l(l.tli53)}</li>
  </ol>
</Page>