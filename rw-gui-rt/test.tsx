import React from 'react';
import ReactDOM from 'react-dom';
import { renderRule } from 'rw-lib/fela';

//import { Button } from "react-toolbox/lib/button/Button";
import Button from "react-toolbox/lib/button/Button";
import rippleFactory from 'react-toolbox/lib/ripple/Ripple'
import { ThemeProvider } from "react-css-themr";
import theme from "./theme";
import map from "./login/img/login-providers.map";

export function init() {
  //const b = <Ca x={{}}>
  //  <Cb x={{}}>
  //    <Cc x={{}}/>
  //  </Cb>
  //  <Cc x={{}}/>
  //</Ca>;
  //b.props['x']['x'] = 'y';
  //const t = b.type===Ca;
  //debugger;
  //

  const RippledInner: React.StatelessComponent<{}> = props => <a href='#' style={{ position: 'relative' }}>{props.children}</a>;

  //const Rippled = rippleFactory({ spread: 3 })(RippledInner);
  const Rippled = rippleFactory({ spread: 3 })(RipleCls);
  const Rippledx = rippleFactory({ spread: 3 })(() => {
    return <h3>XXXXX</h3>//<div className={imgMapToClass(map, 'google')} />;
  });
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <div>
        <Button primary raised>Hallo world</Button>
        <h2 className={renderRule({ color: 'red', marginTop:'10px' })}>
          RED FELA
        </h2>
        <Rippled>Ripple Test</Rippled>
      </div>
    </ThemeProvider>,
    document.getElementById('content'));
}

class RipleCls extends React.Component<{}, {}> {
  render(): JSX.Element { return <a href='#' style={{ position: 'relative' }}>{this.props.children}</a>; }
}


const imgMapToClass = (map: DCourse.IImgMap, id: string) => {
  const seg = map.segments[id]; if (!seg) throw new Error(`Cannot find segment ${id}`);
  return renderRule({
    backgroundImage: 'url(' + map.img.url + ')',
    width: (seg.width ? seg.width : map.defaultWidth) + 'px',
    height: (seg.height ? seg.height : map.defaultHeight) + 'px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: `${seg.left ? seg.left : 0}px ${seg.top ? seg.top : 0}px`
  } as DFela.IStyle);
};

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