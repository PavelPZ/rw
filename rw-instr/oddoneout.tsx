import React from 'react'; import course, {Page} from 'rw-course'; import { $l } from 'rw-lib/loc'; import l from './oddoneout-loc';  export default () => /*
*********** START MARKUP HERE: */
<Page title="">
  <h1 className="techInstr  ">{$l(l.th301)}</h1>
  <p>{$l(l.tp301)}</p>
  <ol>
    <li>{$l(l.tli301)}</li>
    <li>{$l(l.tli302)}</li>
  </ol>
</Page>