import React from 'react';
import { ThemeProvider } from "react-css-themr";
import theme from "rw-gui-rt/theme";

import { RouteHook } from 'rw-router';
import { RecHome } from 'rw-gui-rt/recordings/index';
//import { CourseContext } from 'rw-course';
import { blockGuiProxy } from 'rw-redux';

const getRTAppRoot = () => {
  return <ThemeProvider theme={theme}><div><RouteHook parentPath='' hookId='' /><RecHome />{blockGuiProxy.value()}</div></ThemeProvider>;
};

export default getRTAppRoot;