///<reference path='../react/react.d.ts' />

declare namespace __RT {
  import React = __React;

  export interface Props {
    /**
     * Set a class for the root component.
     */
    className?: string;
    /**
     * Key used to uniquely identify the element within an Array.
     */
    key?: string | number;
    /**
     * Callback called when the component is clicked.
     */
    onClick?: Function;
    /**
     * Fires after the mouse is released from the Component.
     */
    onMouseUp?: Function;
    /**
     * Callback called when the mouse enters the Component.
     */
    onMouseEnter?: Function;
    /**
     * Callback called when the mouse leaves the Component.
     */
    onMouseLeave?: Function;
    /**
     * Callback called when the mouse press the Component.
     */
    onMouseDown?: Function;
    onContextMenu?: Function;
    onDoubleClick?: Function;
    onDrag?: Function;
    onDragEnd?: Function;
    onDragEnter?: Function;
    onDragExit?: Function;
    onDragLeave?: Function;
    onDragOver?: Function;
    onDragStart?: Function;
    onDrop?: Function;
    onMouseMove?: Function;
    onMouseOut?: Function;
    onMouseOver?: Function;
    onTouchCancel?: Function;
    onTouchEnd?: Function;
    onTouchMove?: Function;
    onTouchStart?: Function;
    /**
     * Set inline style for the root component.
     */
    style?: React.CSSProperties;
  }

  const APP_BAR = 'RTAppBar';
  const AUTOCOMPLETE = 'RTAutocomplete';
  const AVATAR = 'RTAvatar';
  const BUTTON = 'RTButton';
  const CARD = 'RTCard';
  const CHIP = 'RTChip';
  const CHECKBOX = 'RTCheckbox';
  const DATE_PICKER = 'RTDatePicker';
  const DIALOG = 'RTDialog';
  const DROPDOWN = 'RTDropdown';
  const INPUT = 'RTInput';
  const LAYOUT = 'RTLayout';
  const LINK = 'RTLink';
  const LIST = 'RTList';
  const MENU = 'RTMenu';
  const NAVIGATION = 'RTNavigation';
  const OVERLAY = 'RTOverlay';
  const PROGRESS_BAR = 'RTProgressBar';
  const RADIO = 'RTRadio';
  const RIPPLE = 'RTRipple';
  const SLIDER = 'RTSlider';
  const SNACKBAR = 'RTSnackbar';
  const SWITCH = 'RTSwitch';
  const TABLE = 'RTTable';
  const TABS = 'RTTabs';
  const TOOLTIP = 'RTTooltip';
  const TIME_PICKER = 'RTTimePicker';

}
declare module 'react-toolbox' {
  import ReactToolbox = __RT;
  export = ReactToolbox;
}


declare module 'react-toolbox/lib/app_bar/AppBar' {
  const AppBar: typeof __RT.AppBar;
  export default AppBar;
}
declare module 'react-toolbox/lib/autocomplete/Autocomplete' {
  const Autocomplete: typeof __RT.Autocomplete;
  export default Autocomplete;
}
declare module 'react-toolbox/lib/avatar/Avatar' {
  const Avatar: typeof __RT.Avatar;
  export default Avatar;
}
declare module 'react-toolbox/lib/button/Button' {
  const Button: typeof __RT.Button;
  export default Button;
}
declare module 'react-toolbox/lib/button/IconButton' {
  const IconButton: typeof __RT.IconButton;
  export default IconButton;
}
declare module 'react-toolbox/lib/card/Card' {
  const Card: typeof __RT.Card;
  export default Card;
}
declare module 'react-toolbox/lib/card/CardActions' {
  const CardActions: typeof __RT.CardActions;
  export default CardActions;
}
declare module 'react-toolbox/lib/card/CardMedia' {
  const CardMedia: typeof __RT.CardMedia;
  export default CardMedia;
}
declare module 'react-toolbox/lib/card/CardText' {
  const CardText: typeof __RT.CardText;
  export default CardText;
}
declare module 'react-toolbox/lib/card/CardTitle' {
  const CardTitle: typeof __RT.CardTitle;
  export default CardTitle;
}
declare module 'react-toolbox/lib/checkbox/Checkbox' {
  const Checkbox: typeof __RT.Checkbox;
  export default Checkbox;
}
declare module 'react-toolbox/lib/chip/Chip' {
  const Chip: typeof __RT.Chip;
  export default Chip;
}
declare module 'react-toolbox/lib/date_picker/DatePicker' {
  const DatePicker: typeof __RT.DatePicker;
  export default DatePicker;
}
declare module 'react-toolbox/lib/dialog/Dialog' {
  const Dialog: typeof __RT.Dialog;
  export default Dialog;
}
declare module 'react-toolbox/lib/drawer/Drawer' {
  const Drawer: typeof __RT.Drawer;
  export default Drawer;
}
declare module 'react-toolbox/lib/dropdown/Dropdown' {
  const Dropdown: typeof __RT.Dropdown;
  export default Dropdown;
}
declare module 'react-toolbox/lib/font_icon/FontIcon' {
  const FontIcon: typeof __RT.FontIcon;
  export default FontIcon;
}
declare module 'react-toolbox/lib/input/Input' {
  const Input: typeof __RT.Input;
  export default Input;
}
declare module 'react-toolbox/lib/layout/Layout' {
  const Layout: typeof __RT.Layout;
  export default Layout;
}
declare module 'react-toolbox/lib/overlay/Overlay' {
  const Overlay: typeof __RT.Overlay;
  export default Overlay;
}
declare module 'react-toolbox/lib/layout/Panel' {
  const Panel: typeof __RT.Panel;
  export default Panel;
}
declare module 'react-toolbox/lib/layout/NavDrawer' {
  const NavDrawer: typeof __RT.NavDrawer;
  export default NavDrawer;
}
declare module 'react-toolbox/lib/layout/Sidebar' {
  const Sidebar: typeof __RT.Sidebar;
  export default Sidebar;
}

declare module 'react-toolbox/lib/link/Link' {
  const Link: typeof __RT.Link;
  export default Link;
}
declare module 'react-toolbox/lib/list/List' {
  const List: typeof __RT.List;
  export default List;
}
declare module 'react-toolbox/lib/list/ListItem' {
  const ListItem: typeof __RT.ListItem;
  export default ListItem;
}
declare module 'react-toolbox/lib/list/ListCheckbox' {
  const ListCheckbox: typeof __RT.ListCheckbox;
  export default ListCheckbox;
}
declare module 'react-toolbox/lib/list/ListSubHeader' {
  const ListSubHeader: typeof __RT.ListSubHeader;
  export default ListSubHeader;
}
declare module 'react-toolbox/lib/list/ListDivider' {
  const ListDivider: typeof __RT.ListDivider;
  export default ListDivider;
}
declare module 'react-toolbox/lib/menu/Menu' {
  const Menu: typeof __RT.Menu;
  export default Menu;
}
declare module 'react-toolbox/lib/menu/IconMenu' {
  const IconMenu: typeof __RT.IconMenu;
  export default IconMenu;
}
declare module 'react-toolbox/lib/menu/MenuItem' {
  const MenuItem: typeof __RT.MenuItem;
  export default MenuItem;
}
declare module 'react-toolbox/lib/menu/MenuDivider' {
  const MenuDivider: typeof __RT.MenuDivider;
  export default MenuDivider;
}
declare module 'react-toolbox/lib/navigation/Navigation' {
  const Navigation: typeof __RT.Navigation;
  export default Navigation;
}
declare module 'react-toolbox/lib/progress_bar/ProgressBar' {
  const ProgressBar: typeof __RT.ProgressBar;
  export default ProgressBar;
}
declare module 'react-toolbox/lib/radio/RadioGroup' {
  const RadioGroup: typeof __RT.RadioGroup;
  export default RadioGroup;
}
declare module 'react-toolbox/lib/radio/RadioButton' {
  const RadioButton: typeof __RT.RadioButton;
  export default RadioButton;
}
declare module 'react-toolbox/lib/ripple/Ripple' {
  const Ripple: typeof __RT.Ripple;
  export default Ripple;
}
declare module 'react-toolbox/lib/slider/Slider' {
  const Slider: typeof __RT.Slider;
  export default Slider;
}
declare module 'react-toolbox/lib/snackbar/Snackbar' {
  const Snackbar: typeof __RT.Snackbar;
  export default Snackbar;
}
declare module 'react-toolbox/lib/switch/Switch' {
  const Switch: typeof __RT.Switch;
  export default Switch;
}
declare module 'react-toolbox/lib/table/Table' {
  const Table: typeof __RT.Table;
  export default Table;
}
declare module 'react-toolbox/lib/tabs/Tab' {
  const Tab: typeof __RT.Tab;
  export default Tab;
}
declare module 'react-toolbox/lib/tabs/Tabs' {
  const Tabs: typeof __RT.Tabs;
  export default Tabs;
}
declare module 'react-toolbox/lib/time_picker/TimePicker' {
  const TimePicker: typeof __RT.TimePicker;
  export default TimePicker;
}
declare module 'react-toolbox/lib/tooltip/Tooltip' {
  const Tooltip: typeof __RT.Tooltip;
  export default Tooltip;
}
