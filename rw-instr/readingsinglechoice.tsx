import { Page } from 'rw-course';
import ll from './readingsinglechoice.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th321)}</h1>
  <p>{$l(l.tp321)}</p>
  <ol>
    <li>{$l(l.tli321)}</li>
    <li>{$l(l.tli322)}</li>
    <li>{$l(l.tli323)}</li>
    <li>{$l(l.tli324)}</li>
  </ol>
</Page>