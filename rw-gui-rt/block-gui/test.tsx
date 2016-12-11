import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from "react-toolbox/lib/button/index";

export function init() {
  ReactDOM.render(<Button primary raised>Hallo world</Button>, document.getElementById('content'));
}