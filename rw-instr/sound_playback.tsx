import { Page } from 'rw-course';
import ll from './sound_playback.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th122)}</h1>
  <p>{$l(l.tp31)}</p>
  <ol>
    <li>{$l(l.tli61)}</li>
    <li>{$l(l.tli62)}</li>
    <li>{$l(l.tli63)}</li>
  </ol>
</Page>