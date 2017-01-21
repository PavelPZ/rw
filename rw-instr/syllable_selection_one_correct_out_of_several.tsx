import { Page } from 'rw-course';
import ll from './syllable_selection_one_correct_out_of_several.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th17)}</h1>
  <p>{$l(l.tp7)}</p>
  <ol>
    <li>{$l(l.tli26)}</li>
    <li>{$l(l.tli27)}</li>
  </ol>
  <p>{$l(l.tp8)}</p>
</Page>