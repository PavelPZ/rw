import React from 'react'; import course, {Page} from 'rw-course'; import { $l } from 'rw-lib/loc'; import l from './readingtruefalse-loc';  export default () => /*
*********** START MARKUP HERE: */
<Page title="">
  <h1 className="techInstr  ">{$l(l.th311)}</h1>
  <p>{$l(l.tp311)}</p>
  <ol>
    <li>{$l(l.tli311)}</li>
    <li>{$l(l.tli312)}</li>
    <li>{$l(l.tli313)}</li>
    <li>{$l(l.tli314)}</li>
  </ol>
</Page>