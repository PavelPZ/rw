import React from 'react';
import { ThemeProvider } from "react-css-themr";
import theme from "./theme";
import BlockGui from './block-gui/block-gui';
import { RouteHook } from '../rw-router/block-gui';

const getRTAppRoot = () => <ThemeProvider theme={theme}><div><BlockGui /><RouteHook parentPath='' hookId='' /></div></ThemeProvider>;

export default getRTAppRoot;