import React from 'react';
import ReactDOM from 'react-dom';

import Button from "react-toolbox/lib/button/Button";
import { ThemeProvider } from "react-css-themr";

export function init() {
  ReactDOM.render(<div>
    <ThemeProvider theme={theme}>
      <div className='D(f)'>
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
  "RTAppBar": {
    "appBar": "rt-app_bar-theme-appBar",
    "flat": "rt-app_bar-theme-flat",
    "fixed": "rt-app_bar-theme-fixed",
    "title": "rt-app_bar-theme-title",
    "leftIcon": "rt-app_bar-theme-leftIcon",
    "rightIcon": "rt-app_bar-theme-rightIcon",
    "scrollHide": "rt-app_bar-theme-scrollHide"
  },
  "RTAutocomplete": {
    "autocomplete": "rt-autocomplete-theme-autocomplete",
    "focus": "rt-autocomplete-theme-focus",
    "suggestions": "rt-autocomplete-theme-suggestions",
    "values": "rt-autocomplete-theme-values",
    "value": "rt-autocomplete-theme-value",
    "up": "rt-autocomplete-theme-up",
    "suggestion": "rt-autocomplete-theme-suggestion",
    "active": "rt-autocomplete-theme-active",
    "input": "rt-autocomplete-theme-input"
  },
  "RTAvatar": {
    "avatar": "rt-avatar-theme-avatar",
    "image": "rt-avatar-theme-image",
    "letter": "rt-avatar-theme-letter"
  },
  "RTButton": {
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
  "RTCard": {
    "card": "rt-card-theme-card",
    "raised": "rt-card-theme-raised",
    "cardMedia": "rt-card-theme-cardMedia",
    "wide": "rt-card-theme-wide",
    "square": "rt-card-theme-square",
    "content": "rt-card-theme-content",
    "contentOverlay": "rt-card-theme-contentOverlay",
    "cardTitle": "rt-card-theme-cardTitle",
    "cardActions": "rt-card-theme-cardActions",
    "cardText": "rt-card-theme-cardText",
    "subtitle": "rt-card-theme-subtitle",
    "large": "rt-card-theme-large",
    "title": "rt-card-theme-title",
    "small": "rt-card-theme-small"
  },
  "RTCheckbox": {
    "field": "rt-checkbox-theme-field",
    "ripple": "rt-checkbox-theme-ripple",
    "text": "rt-checkbox-theme-text",
    "input": "rt-checkbox-theme-input",
    "check": "rt-checkbox-theme-check",
    "checked": "rt-checkbox-theme-checked",
    "checkmark-expand": "rt-checkbox-theme-checkmark-expand",
    "disabled": "rt-checkbox-theme-disabled"
  },
  "RTChip": {
    "chip": "rt-chip-theme-chip",
    "avatar": "rt-chip-theme-avatar",
    "deletable": "rt-chip-theme-deletable",
    "delete": "rt-chip-theme-delete",
    "deleteIcon": "rt-chip-theme-deleteIcon",
    "deleteX": "rt-chip-theme-deleteX"
  },
  "RTDatePicker": {
    "input": "rt-date_picker-theme-input",
    "disabled": "rt-date_picker-theme-disabled",
    "inputElement": "rt-date_picker-theme-inputElement",
    "header": "rt-date_picker-theme-header",
    "year": "rt-date_picker-theme-year",
    "date": "rt-date_picker-theme-date",
    "calendarWrapper": "rt-date_picker-theme-calendarWrapper",
    "yearsDisplay": "rt-date_picker-theme-yearsDisplay",
    "monthsDisplay": "rt-date_picker-theme-monthsDisplay",
    "dialog": "rt-date_picker-theme-dialog",
    "button": "rt-date_picker-theme-button",
    "calendar": "rt-date_picker-theme-calendar",
    "prev": "rt-date_picker-theme-prev",
    "next": "rt-date_picker-theme-next",
    "title": "rt-date_picker-theme-title",
    "years": "rt-date_picker-theme-years",
    "active": "rt-date_picker-theme-active",
    "week": "rt-date_picker-theme-week",
    "days": "rt-date_picker-theme-days",
    "day": "rt-date_picker-theme-day",
    "month": "rt-date_picker-theme-month"
  },
  "RTDialog": {
    "dialog": "rt-dialog-theme-dialog",
    "active": "rt-dialog-theme-active",
    "small": "rt-dialog-theme-small",
    "normal": "rt-dialog-theme-normal",
    "large": "rt-dialog-theme-large",
    "fullscreen": "rt-dialog-theme-fullscreen",
    "title": "rt-dialog-theme-title",
    "body": "rt-dialog-theme-body",
    "navigation": "rt-dialog-theme-navigation",
    "button": "rt-dialog-theme-button"
  },
  "RTDrawer": {
    "drawer": "rt-drawer-theme-drawer",
    "active": "rt-drawer-theme-active",
    "right": "rt-drawer-theme-right",
    "left": "rt-drawer-theme-left"
  },
  "RTDropdown": {
    "dropdown": "rt-dropdown-theme-dropdown",
    "active": "rt-dropdown-theme-active",
    "values": "rt-dropdown-theme-values",
    "label": "rt-dropdown-theme-label",
    "value": "rt-dropdown-theme-value",
    "up": "rt-dropdown-theme-up",
    "disabled": "rt-dropdown-theme-disabled",
    "field": "rt-dropdown-theme-field",
    "errored": "rt-dropdown-theme-errored",
    "templateValue": "rt-dropdown-theme-templateValue",
    "required": "rt-dropdown-theme-required",
    "error": "rt-dropdown-theme-error",
    "selected": "rt-dropdown-theme-selected"
  },
  "RTInput": {
    "input": "rt-input-theme-input",
    "withIcon": "rt-input-theme-withIcon",
    "icon": "rt-input-theme-icon",
    "inputElement": "rt-input-theme-inputElement",
    "bar": "rt-input-theme-bar",
    "label": "rt-input-theme-label",
    "fixed": "rt-input-theme-fixed",
    "required": "rt-input-theme-required",
    "hint": "rt-input-theme-hint",
    "filled": "rt-input-theme-filled",
    "error": "rt-input-theme-error",
    "counter": "rt-input-theme-counter",
    "disabled": "rt-input-theme-disabled",
    "errored": "rt-input-theme-errored",
    "hidden": "rt-input-theme-hidden"
  },
  "RTLayout": {
    "layout": "rt-layout-theme-layout",
    "navDrawer": "rt-layout-theme-navDrawer",
    "scrim": "rt-layout-theme-scrim",
    "drawerContent": "rt-layout-theme-drawerContent",
    "scrollY": "rt-layout-theme-scrollY",
    "pinned": "rt-layout-theme-pinned",
    "active": "rt-layout-theme-active",
    "wide": "rt-layout-theme-wide",
    "smPermanent": "rt-layout-theme-smPermanent",
    "smTabletPermanent": "rt-layout-theme-smTabletPermanent",
    "mdPermanent": "rt-layout-theme-mdPermanent",
    "lgPermanent": "rt-layout-theme-lgPermanent",
    "lgTabletPermanent": "rt-layout-theme-lgTabletPermanent",
    "xlPermanent": "rt-layout-theme-xlPermanent",
    "xxlPermanent": "rt-layout-theme-xxlPermanent",
    "xxxlPermanent": "rt-layout-theme-xxxlPermanent",
    "panel": "rt-layout-theme-panel",
    "sidebar": "rt-layout-theme-sidebar",
    "sidebarContent": "rt-layout-theme-sidebarContent",
    "width-1": "rt-layout-theme-width-1",
    "width-2": "rt-layout-theme-width-2",
    "width-3": "rt-layout-theme-width-3",
    "width-4": "rt-layout-theme-width-4",
    "width-5": "rt-layout-theme-width-5",
    "width-6": "rt-layout-theme-width-6",
    "width-7": "rt-layout-theme-width-7",
    "width-8": "rt-layout-theme-width-8",
    "width-9": "rt-layout-theme-width-9",
    "width-10": "rt-layout-theme-width-10",
    "width-11": "rt-layout-theme-width-11",
    "width-12": "rt-layout-theme-width-12",
    "width-100": "rt-layout-theme-width-100",
    "width-25": "rt-layout-theme-width-25",
    "width-33": "rt-layout-theme-width-33",
    "width-50": "rt-layout-theme-width-50",
    "width-66": "rt-layout-theme-width-66",
    "width-75": "rt-layout-theme-width-75"
  },
  "RTLink": {
    "icon": "rt-link-theme-icon",
    "link": "rt-link-theme-link",
    "active": "rt-link-theme-active"
  },
  "RTList": {
    "list": "rt-list-theme-list",
    "subheader": "rt-list-theme-subheader",
    "divider": "rt-list-theme-divider",
    "inset": "rt-list-theme-inset",
    "listItem": "rt-list-theme-listItem",
    "ripple": "rt-list-theme-ripple",
    "item": "rt-list-theme-item",
    "selectable": "rt-list-theme-selectable",
    "disabled": "rt-list-theme-disabled",
    "checkboxItem": "rt-list-theme-checkboxItem",
    "checkbox": "rt-list-theme-checkbox",
    "left": "rt-list-theme-left",
    "right": "rt-list-theme-right",
    "itemAction": "rt-list-theme-itemAction",
    "itemContentRoot": "rt-list-theme-itemContentRoot",
    "large": "rt-list-theme-large",
    "itemText": "rt-list-theme-itemText",
    "primary": "rt-list-theme-primary"
  },
  "RTMenu": {
    "iconMenu": "rt-menu-theme-iconMenu",
    "icon": "rt-menu-theme-icon",
    "menu": "rt-menu-theme-menu",
    "topLeft": "rt-menu-theme-topLeft",
    "outline": "rt-menu-theme-outline",
    "topRight": "rt-menu-theme-topRight",
    "bottomLeft": "rt-menu-theme-bottomLeft",
    "bottomRight": "rt-menu-theme-bottomRight",
    "static": "rt-menu-theme-static",
    "menuInner": "rt-menu-theme-menuInner",
    "rippled": "rt-menu-theme-rippled",
    "active": "rt-menu-theme-active",
    "menuItem": "rt-menu-theme-menuItem",
    "disabled": "rt-menu-theme-disabled",
    "selected": "rt-menu-theme-selected",
    "ripple": "rt-menu-theme-ripple",
    "caption": "rt-menu-theme-caption",
    "shortcut": "rt-menu-theme-shortcut",
    "menuDivider": "rt-menu-theme-menuDivider"
  },
  "RTNavigation": {
    "horizontal": "rt-navigation-theme-horizontal",
    "vertical": "rt-navigation-theme-vertical"
  },
  "RTOverlay": {
    "overlay": "rt-overlay-theme-overlay",
    "invisible": "rt-overlay-theme-invisible",
    "backdrop": "rt-overlay-theme-backdrop",
    "active": "rt-overlay-theme-active"
  },
  "RTProgressBar": {
    "linear": "rt-progress_bar-theme-linear",
    "indeterminate": "rt-progress_bar-theme-indeterminate",
    "value": "rt-progress_bar-theme-value",
    "linear-indeterminate-bar": "rt-progress_bar-theme-linear-indeterminate-bar",
    "buffer": "rt-progress_bar-theme-buffer",
    "circular": "rt-progress_bar-theme-circular",
    "circle": "rt-progress_bar-theme-circle",
    "circular-indeterminate-bar-rotate": "rt-progress_bar-theme-circular-indeterminate-bar-rotate",
    "path": "rt-progress_bar-theme-path",
    "circular-indeterminate-bar-dash": "rt-progress_bar-theme-circular-indeterminate-bar-dash",
    "multicolor": "rt-progress_bar-theme-multicolor",
    "colors": "rt-progress_bar-theme-colors"
  },
  "RTRadio": {
    "radio": "rt-radio-theme-radio",
    "radioChecked": "rt-radio-theme-radioChecked",
    "ripple": "rt-radio-theme-ripple",
    "field": "rt-radio-theme-field",
    "disabled": "rt-radio-theme-disabled",
    "text": "rt-radio-theme-text",
    "input": "rt-radio-theme-input"
  },
  "RTRipple": {
    "ripple": "rt-ripple-theme-ripple",
    "rippleWrapper": "rt-ripple-theme-rippleWrapper",
    "rippleRestarting": "rt-ripple-theme-rippleRestarting",
    "rippleActive": "rt-ripple-theme-rippleActive"
  },
  "RTSlider": {
    "container": "rt-slider-theme-container",
    "knob": "rt-slider-theme-knob",
    "innerknob": "rt-slider-theme-innerknob",
    "snaps": "rt-slider-theme-snaps",
    "snap": "rt-slider-theme-snap",
    "input": "rt-slider-theme-input",
    "progress": "rt-slider-theme-progress",
    "innerprogress": "rt-slider-theme-innerprogress",
    "slider": "rt-slider-theme-slider",
    "editable": "rt-slider-theme-editable",
    "pinned": "rt-slider-theme-pinned",
    "pressed": "rt-slider-theme-pressed",
    "ring": "rt-slider-theme-ring"
  },
  "RTSnackbar": {
    "snackbar": "rt-snackbar-theme-snackbar",
    "accept": "rt-snackbar-theme-accept",
    "button": "rt-snackbar-theme-button",
    "warning": "rt-snackbar-theme-warning",
    "cancel": "rt-snackbar-theme-cancel",
    "active": "rt-snackbar-theme-active",
    "label": "rt-snackbar-theme-label"
  },
  "RTSwitch": {
    "field": "rt-switch-theme-field",
    "disabled": "rt-switch-theme-disabled",
    "text": "rt-switch-theme-text",
    "on": "rt-switch-theme-on",
    "off": "rt-switch-theme-off",
    "thumb": "rt-switch-theme-thumb",
    "ripple": "rt-switch-theme-ripple",
    "input": "rt-switch-theme-input",
    "switch-on": "rt-switch-theme-switch-on",
    "switch-off": "rt-switch-theme-switch-off"
  },
  "RTTable": {
    "table": "rt-table-theme-table",
    "selectable": "rt-table-theme-selectable",
    "row": "rt-table-theme-row",
    "selected": "rt-table-theme-selected",
    "editable": "rt-table-theme-editable"
  },
  "RTTabs": {
    "tabs": "rt-tabs-theme-tabs",
    "navigation": "rt-tabs-theme-navigation",
    "navigationContainer": "rt-tabs-theme-navigationContainer",
    "arrow": "rt-tabs-theme-arrow",
    "arrowContainer": "rt-tabs-theme-arrowContainer",
    "label": "rt-tabs-theme-label",
    "active": "rt-tabs-theme-active",
    "disabled": "rt-tabs-theme-disabled",
    "hidden": "rt-tabs-theme-hidden",
    "withIcon": "rt-tabs-theme-withIcon",
    "withText": "rt-tabs-theme-withText",
    "icon": "rt-tabs-theme-icon",
    "pointer": "rt-tabs-theme-pointer",
    "disableAnimation": "rt-tabs-theme-disableAnimation",
    "tab": "rt-tabs-theme-tab",
    "fixed": "rt-tabs-theme-fixed",
    "inverse": "rt-tabs-theme-inverse"
  },
  "RTTimePicker": {
    "input": "rt-time_picker-theme-input",
    "disabled": "rt-time_picker-theme-disabled",
    "inputElement": "rt-time_picker-theme-inputElement",
    "header": "rt-time_picker-theme-header",
    "hours": "rt-time_picker-theme-hours",
    "minutes": "rt-time_picker-theme-minutes",
    "separator": "rt-time_picker-theme-separator",
    "ampm": "rt-time_picker-theme-ampm",
    "am": "rt-time_picker-theme-am",
    "pm": "rt-time_picker-theme-pm",
    "dialog": "rt-time_picker-theme-dialog",
    "button": "rt-time_picker-theme-button",
    "hoursDisplay": "rt-time_picker-theme-hoursDisplay",
    "minutesDisplay": "rt-time_picker-theme-minutesDisplay",
    "amFormat": "rt-time_picker-theme-amFormat",
    "pmFormat": "rt-time_picker-theme-pmFormat",
    "clock": "rt-time_picker-theme-clock",
    "placeholder": "rt-time_picker-theme-placeholder",
    "clockWrapper": "rt-time_picker-theme-clockWrapper",
    "face": "rt-time_picker-theme-face",
    "number": "rt-time_picker-theme-number",
    "active": "rt-time_picker-theme-active",
    "hand": "rt-time_picker-theme-hand",
    "small": "rt-time_picker-theme-small",
    "knob": "rt-time_picker-theme-knob"
  },
  "RTTooltip": {
    "tooltip": "rt-tooltip-theme-tooltip",
    "tooltipActive": "rt-tooltip-theme-tooltipActive",
    "tooltipTop": "rt-tooltip-theme-tooltipTop",
    "tooltipLeft": "rt-tooltip-theme-tooltipLeft",
    "tooltipRight": "rt-tooltip-theme-tooltipRight",
    "tooltipInner": "rt-tooltip-theme-tooltipInner"
  }
};
