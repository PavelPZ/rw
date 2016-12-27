import React from 'react';
import ReactDOM from 'react-dom';
import { config } from 'config';
import { lazyModuleHandler, load, unload } from 'rw-lib/lazy-loader';
import { compileHandler } from './compiler';



export function init() {
  let actMod: lazyModuleHandler = null;
  ReactDOM.render(<div>
    <a href='#' onClick={ev => {
      ev.preventDefault();
      if (actMod) { unload(actMod); actMod = null; }
      load(new compileHandler('rw-course/test-lazy.js')).then(m => actMod = m /*TODO: render actMod.exercise as JSX.Element*/);
    } }>Load module</a>
  </div>, document.getElementById('content'));
}

