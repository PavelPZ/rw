import React from 'react'; import course, {Page} from 'rw-course'; import { $l } from 'rw-lib/loc'; import l from './pairing_new-loc';  export default () => /*
*********** START MARKUP HERE: */
<Page title="">
  <h1 className="techInstr  ">{$l(l.th15)}</h1>
  <p>{$l(l.tp5)}</p>
  <ol>
    <li>{$l(l.tli20)}</li>
    <li>{$l(l.tli21)}</li>
    <li>{$l(l.tli22)}</li>
    <li>{$l(l.tli23)}</li>
  </ol>
</Page>