import { Page } from 'rw-course';
import ll from './listen_talk.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th125)}</h1>
  <p>{$l(l.tp34)}</p>
  <ol>
    <li>{$l(l.tli74)}</li>
    <li>{$l(l.tli75)}</li>
    <li>{$l(l.tli76)}</li>
    <li>{$l(l.tli77)}</li>
  </ol>
</Page>