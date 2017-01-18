import React from 'react'; import course, {Page} from 'rw-course'; import { $l } from 'rw-lib/loc'; import l from './sentence_sequencing-loc';   export default () => /*
*********** START MARKUP HERE: */
<Page title="">
  <h1 className="techInstr  ">{$l(l.th1)}</h1>
  <p>{$l(l.tp)}</p>
  <ol>
    <li>{$l(l.tli)}</li>
    <li>{$l(l.tli1)}</li>
    <li>{$l(l.tli2)}</li>
    <li>{$l(l.tli3)}</li>
  </ol>
</Page>