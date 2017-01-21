import { Page } from 'rw-course';
import ll from './show_the_hidden_text.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th121)}</h1>
  <p>{$l(l.tp30)}</p>
</Page>