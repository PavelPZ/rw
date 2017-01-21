import { Page } from 'rw-course';
import ll from './text_section_selecting_one_or_more_correct_answers.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th18)}</h1>
  <p>{$l(l.tp9)}</p>
  <ol>
    <li>{$l(l.tli28)}</li>
    <li>{$l(l.tli29)}</li>
  </ol>
  <p>{$l(l.tp10)}</p>
</Page>