import React from 'react';
import ReactDOM from 'react-dom';
import { config } from 'config';
import { lazyModuleHandler, load, unload } from 'rw-lib/lazy-loader';
import { handler } from './preprocess';



export function init() {
  let actMod: lazyModuleHandler = null;
  ReactDOM.render(<div>
    <a href='#' onClick={ev => {
      ev.preventDefault();
      if (actMod) { unload(actMod); actMod = null; }
      load(new handler('rw-course/test-lazy.js')).then(m => actMod = m);
    } }>Load module</a>
  </div>, document.getElementById('content'));
}

