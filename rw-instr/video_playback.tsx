import { Page } from 'rw-course';
import ll from './video_playback.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th123)}</h1>
  <p>{$l(l.tp32)}</p>
  <ol>
    <li>{$l(l.tli64)}</li>
    <li>{$l(l.tli65)}</li>
    <li>{$l(l.tli66)}</li>
    <li>{$l(l.tli67)}</li>
    <li>{$l(l.tli68)}</li>
    <li>{$l(l.tli69)}</li>
    <li>{$l(l.tli70)}</li>
  </ol>
</Page>