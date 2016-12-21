import React from 'react';
import { ThemeProvider } from "react-css-themr";

import theme from "rw-gui-rt/theme";
import { RouteHook } from 'rw-router/route-hook';
import { RecHome } from 'rw-gui-rt/recordings/index';
import { blockGuiProxy } from 'rw-redux/block-gui';

const getRTAppRoot = () => <ThemeProvider theme={theme}><div><RouteHook parentPath='' hookId='' /><RecHome />{blockGuiProxy.value()}</div></ThemeProvider>;

export default getRTAppRoot;