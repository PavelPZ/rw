import React from 'react';
import { ThemeProvider } from "react-css-themr";
import theme from "./theme";
import BlockGui from './block-gui/index';
import { RouteHook } from '../rw-router/router';

const getRTAppRoot = () => <ThemeProvider theme={theme}><div><BlockGui /><RouteHook parentPath='' hookId='' /></div></ThemeProvider>;

//const APP_BAR = 'RTAppBar';
//const AUTOCOMPLETE = 'RTAutocomplete';
//const AVATAR = 'RTAvatar';
//const BUTTON = 'RTButton';
//const CARD = 'RTCard';
//const CHIP = 'RTChip';
//const CHECKBOX = 'RTCheckbox';
//const DATE_PICKER = 'RTDatePicker';
//const DIALOG = 'RTDialog';
//const DROPDOWN = 'RTDropdown';
//const INPUT = 'RTInput';
//const LAYOUT = 'RTLayout';
//const LINK = 'RTLink';
//const LIST = 'RTList';
//const MENU = 'RTMenu';
//const NAVIGATION = 'RTNavigation';
//const OVERLAY = 'RTOverlay';
//const PROGRESS_BAR = 'RTProgressBar';
//const RADIO = 'RTRadio';
//const RIPPLE = 'RTRipple';
//const SLIDER = 'RTSlider';
//const SNACKBAR = 'RTSnackbar';
//const SWITCH = 'RTSwitch';
//const TABLE = 'RTTable';
//const TABS = 'RTTabs';
//const TOOLTIP = 'RTTooltip';
//const TIME_PICKER = 'RTTimePicker';

export type RT_IDS =
  'RTAppBar' | 'RTAutocomplete' | 'RTAvatar' | 'RTButton' | 'RTCard' | 'RTChip' | 'RTCheckbox' | 'RTDatePicker' | 'RTDialog' | 'RTDropdown' |
  'RTInput' | 'RTLayout' | 'RTLink' | 'RTList' | 'RTMenu' | 'RTNavigation' | 'RTOverlay' | 'RTProgressBar' | 'RTRadio' | 'RTRipple' |
  'RTSlider' | 'RTSnackbar' | 'RTSwitch' | 'RTTable' | 'RTTabs' | 'RTTooltip' | 'RTTimePicker';

export default getRTAppRoot;