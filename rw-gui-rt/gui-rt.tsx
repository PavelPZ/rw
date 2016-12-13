import React from 'react';
import { ThemeProvider } from "react-css-themr";
import theme from "./theme";
import BlockGui from './block-gui/index';
import { RouteHook } from '../rw-router/router';

const getRTAppRoot = () => <ThemeProvider theme={theme}><div><BlockGui /><RouteHook parentPath='' hookId='' /></div></ThemeProvider>;

export default getRTAppRoot;