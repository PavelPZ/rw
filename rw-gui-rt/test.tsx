import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from "react-toolbox/lib/button/index";

export function init() {
  ReactDOM.render(<div>
    <Button primary raised>Hallo world</Button><br/>

  </div>, document.getElementById('content'));
}