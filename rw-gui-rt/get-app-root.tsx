import React from 'react';
import { ThemeProvider } from "react-css-themr";
import theme from "./theme";
import BlockGui from './block-gui/block-gui';
import { RouteHook } from '../rw-router/route-hook';
import { RecHome } from './recordings/index';

const getRTAppRoot = () => <ThemeProvider theme={theme}><div><RouteHook parentPath='' hookId='' /><RecHome /><BlockGui /></div></ThemeProvider>;

export default getRTAppRoot;