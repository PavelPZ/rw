import React from 'react';
import ReactDOM from 'react-dom';

import Button from "react-toolbox/lib/button/Button";
import { ThemeProvider } from "react-css-themr";
import theme from "./theme";

export function init() {
  const b = <Ca x={{}}>
    <Cb x={{}}>
      <Cc x={{}}/>
    </Cb>
    <Cc x={{}}/>
  </Ca>;
  //b.props['x']['x'] = 'y';
  //const t = b.type===Ca;
  //debugger;
  ReactDOM.render(<div>
    <ThemeProvider theme={theme}>
      <div>
        <Button primary raised>Hallo world</Button><br />
        {b}  
      </div>
    </ThemeProvider>
  </div>, document.getElementById('content'));
}


class Ca extends React.Component<React.Props<any> & any, any> {
  constructor(p, c) {
    super(p, c);
    console.log('*** Ca constructor');
  }
  render(): JSX.Element {
    console.log('*** Ca render start');
    try {
      return <div><h3>CA</h3>{this.props.children}</div>
    } finally {
      console.log('*** Ca render end');
    }
  }
  componentWillMount() {
    console.log('*** Ca componentWillMount');
  }
}

class Cb extends React.Component<React.Props<any> & any, any> {
  constructor(p, c) {
    super(p, c);
    console.log('*** Cb constructor');
  }
  render(): JSX.Element {
    console.log('*** Cb render');
    return <div><h3>CB</h3>{this.props.children}</div>
  }
  componentWillMount() {
    console.log('*** Cb componentWillMount');
  }
}

class Cc extends React.Component<React.Props<any> & any, any> {
  constructor(p, c) {
    super(p, c);
    console.log('*** Cc constructor');
  }
  render(): JSX.Element {
    console.log('*** Cc render');
    return <div><h3>CC</h3>{this.props.children}</div>
  }
  componentWillMount() {
    console.log('*** Cc componentWillMount');
  }
}