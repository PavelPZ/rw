import { Page } from 'rw-course';
import ll from './listeningdragging.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th361)}</h1>
  <p>{$l(l.tp361)}</p>
  <ol>
    <li>{$l(l.tli361)}</li>
    <li>{$l(l.tli362)}</li>
    <li>{$l(l.tli363)}</li>
    <li>{$l(l.tli364)}</li>
    <li>{$l(l.tli365)}</li>
    <li>{$l(l.tli366)}</li>
    <li>{$l(l.tli367)}</li>
  </ol>
</Page>