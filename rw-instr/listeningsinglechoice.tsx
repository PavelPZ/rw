import { Page } from 'rw-course';
import ll from './listeningsinglechoice.loc';
import React from 'react'; import { $l, toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const l = ll[toGlobId(__moduleName)]; export default () => 

<Page title="">
  <h1 className="techInstr  ">{$l(l.th341)}</h1>
  <p>{$l(l.tp341)}</p>
  <ol>
    <li>{$l(l.tli341)}</li>
    <li>{$l(l.tli342)}</li>
    <li>{$l(l.tli343)}</li>
    <li>{$l(l.tli344)}</li>
    <li>{$l(l.tli345)}</li>
    <li>{$l(l.tli346)}</li>
    <li>{$l(l.tli347)}</li>
  </ol>
</Page>