import { Page } from 'rw-course';
import ll from './oddoneout.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th301)}</h1>
  <p>{$l(l.tp301)}</p>
  <ol>
    <li>{$l(l.tli301)}</li>
    <li>{$l(l.tli302)}</li>
  </ol>
</Page>