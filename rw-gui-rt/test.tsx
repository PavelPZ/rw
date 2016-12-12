import React from 'react';
import ReactDOM from 'react-dom';

import Button from "react-toolbox/lib/button/Button";
import { ThemeProvider } from "react-css-themr";

export function init() {
  ReactDOM.render(<div>
    <ThemeProvider theme={theme}>
      <div>
        <Button primary raised>Hallo world</Button><br />
      </div>
    </ThemeProvider>
  </div>, document.getElementById('content'));
}

//const shape = React.PropTypes.shape({ theme: React.PropTypes.object.isRequired });

//class Themer extends React.Component<never, never> {
//  render(): JSX.Element { return React.Children.only(this.props.children); }
//  getChildContext() {
//    return {
//      themr: {
//        theme: {
//          RTButton: {
//            "button": "rt-button-theme-button",
//            "raised": "rt-button-theme-raised",
//            "flat": "rt-button-theme-flat",
//            "floating": "rt-button-theme-floating",
//            "toggle": "rt-button-theme-toggle",
//            "rippleWrapper": "rt-button-theme-rippleWrapper",
//            "icon": "rt-button-theme-icon",
//            "mini": "rt-button-theme-mini",
//            "neutral": "rt-button-theme-neutral",
//            "inverse": "rt-button-theme-inverse",
//            "primary": "rt-button-theme-primary",
//            "accent": "rt-button-theme-accent"
//          },
//          RTRipple: {
//            "ripple": "rt-ripple-theme-ripple",
//            "rippleWrapper": "rt-ripple-theme-rippleWrapper",
//            "rippleRestarting": "rt-ripple-theme-rippleRestarting",
//            "rippleActive": "rt-ripple-theme-rippleActive"
//          }
//        }
//      }
//    }
//  }
//  static childContextTypes = { themr: shape.isRequired };
//}

const theme = {
  RTButton: {
    "button": "rt-button-theme-button",
    "raised": "rt-button-theme-raised",
    "flat": "rt-button-theme-flat",
    "floating": "rt-button-theme-floating",
    "toggle": "rt-button-theme-toggle",
    "rippleWrapper": "rt-button-theme-rippleWrapper",
    "icon": "rt-button-theme-icon",
    "mini": "rt-button-theme-mini",
    "neutral": "rt-button-theme-neutral",
    "inverse": "rt-button-theme-inverse",
    "primary": "rt-button-theme-primary",
    "accent": "rt-button-theme-accent"
  },
  RTRipple: {
    "ripple": "rt-ripple-theme-ripple",
    "rippleWrapper": "rt-ripple-theme-rippleWrapper",
    "rippleRestarting": "rt-ripple-theme-rippleRestarting",
    "rippleActive": "rt-ripple-theme-rippleActive"
  }
};
