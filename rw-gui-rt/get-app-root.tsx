import React from 'react';
import { ThemeProvider } from "react-css-themr";
import theme from "./theme";
import { RouteHook } from '../rw-router/route-hook';
import { RecHome } from './recordings/index';

import { blockGuiProxy } from '../rw-redux/block-gui';

const getRTAppRoot = () => <ThemeProvider theme={theme}><div><RouteHook parentPath='' hookId='' /><RecHome />{blockGuiProxy.value()}</div></ThemeProvider>;

export default getRTAppRoot;