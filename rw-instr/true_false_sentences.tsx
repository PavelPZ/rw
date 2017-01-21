import { Page } from 'rw-course';
import ll from './true_false_sentences.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th115)}</h1>
  <p>{$l(l.tp24)}</p>
  <ol>
    <li>{$l(l.tli49)}</li>
    <li>{$l(l.tli50)}</li>
    <li>{$l(l.tli51)}</li>
  </ol>
</Page>