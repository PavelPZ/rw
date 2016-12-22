declare namespace __TH {
  class ThemeProvider extends React.Component<{ theme: {}}, any> { }
}

declare module 'react-css-themr' {
  const ThemeProvider: typeof __TH.ThemeProvider ;
  export { ThemeProvider };
}
