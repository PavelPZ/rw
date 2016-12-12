///<reference path='../react/react.d.ts' />

declare namespace __TH {
  import React = __React;

  class ThemeProvider extends __React.Component<{ theme: {}}, any> { }
}

declare module 'react-css-themr' {
  const ThemeProvider: typeof __TH.ThemeProvider ;
  export { ThemeProvider };
}
