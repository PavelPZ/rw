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
}

declare module 'react-toolbox/lib/app_bar/AppBar' {
  type AppBarTheme = __RT.AppBarTheme; export { AppBarTheme };
  const AppBar: typeof __RT.AppBar; export default AppBar;
}
declare module 'react-toolbox/lib/autocomplete/Autocomplete' {
  const Autocomplete: typeof __RT.Autocomplete; export default Autocomplete;
  type AutocompleteTheme = __RT.AutocompleteTheme; export { AutocompleteTheme };
  
}
declare module 'react-toolbox/lib/avatar/Avatar' {
  const Avatar: typeof __RT.Avatar; export default Avatar;
  type AvatarTheme = __RT.AvatarTheme; export { AvatarTheme };
}
declare module 'react-toolbox/lib/button/Button' {
  const Button: typeof __RT.Button; export default Button;
  type ButtonTheme = __RT.ButtonTheme; export { ButtonTheme };
}
declare module 'react-toolbox/lib/button/IconButton' {
  const IconButton: typeof __RT.IconButton; export default IconButton;
  type IconButtonTheme = __RT.IconButtonTheme; export { IconButtonTheme };
}
declare module 'react-toolbox/lib/button/BrowseButton' {
  const BrowseButton: typeof __RT.BrowseButton; export default BrowseButton;
  type BrowseButtonTheme = __RT.BrowseButtonTheme; export { BrowseButtonTheme };
}
declare module 'react-toolbox/lib/card/Card' {
  const Card: typeof __RT.Card; export default Card;
  type CardTheme = __RT.CardTheme; export { CardTheme };
  type CardThemeAll = __RT.CardThemeAll; export { CardThemeAll };
}
declare module 'react-toolbox/lib/card/CardActions' {
  const CardActions: typeof __RT.CardActions; export default CardActions;
  type CardActionsTheme = __RT.CardActionsTheme; export { CardActionsTheme };
}
declare module 'react-toolbox/lib/card/CardMedia' {
  const CardMedia: typeof __RT.CardMedia; export default CardMedia;
  type CardMediaTheme = __RT.CardMediaTheme; export { CardMediaTheme };
}
declare module 'react-toolbox/lib/card/CardText' {
  const CardText: typeof __RT.CardText; export default CardText;
  type CardTextTheme = __RT.CardTextTheme; export { CardTextTheme };
}
declare module 'react-toolbox/lib/card/CardTitle' {
  const CardTitle: typeof __RT.CardTitle; export default CardTitle;
  type CardTitleTheme = __RT.CardTitleTheme; export { CardTitleTheme };
}
declare module 'react-toolbox/lib/checkbox/Checkbox' {
  const Checkbox: typeof __RT.Checkbox; export default Checkbox;
  type CheckboxTheme = __RT.CheckboxTheme; export { CheckboxTheme };
}
declare module 'react-toolbox/lib/chip/Chip' {
  const Chip: typeof __RT.Chip; export default Chip;
  type ChipTheme = __RT.ChipTheme; export { ChipTheme };
}
declare module 'react-toolbox/lib/date_picker/DatePicker' {
  const DatePicker: typeof __RT.DatePicker; export default DatePicker;
  type DatePickerTheme = __RT.DatePickerTheme; export { DatePickerTheme };
}
declare module 'react-toolbox/lib/dialog/Dialog' {
  const Dialog: typeof __RT.Dialog; export default Dialog;
  type DialogTheme = __RT.DialogTheme; export { DialogTheme };
}
declare module 'react-toolbox/lib/drawer/Drawer' {
  const Drawer: typeof __RT.Drawer; export default Drawer;
  type DrawerTheme = __RT.DrawerTheme; export { DrawerTheme };
}
declare module 'react-toolbox/lib/dropdown/Dropdown' {
  const Dropdown: typeof __RT.Dropdown; export default Dropdown;
  type DropdownTheme = __RT.DropdownTheme; export { DropdownTheme };
}
declare module 'react-toolbox/lib/font_icon/FontIcon' {
  const FontIcon: typeof __RT.FontIcon; export default FontIcon;
}
declare module 'react-toolbox/lib/input/Input' {
  const Input: typeof __RT.Input; export default Input;
  type InputTheme = __RT.InputTheme; export { InputTheme };
}
declare module 'react-toolbox/lib/layout/Layout' {
  const Layout: typeof __RT.Layout; export default Layout;
  type LayoutTheme = __RT.LayoutTheme; export { LayoutTheme };
  type LayoutThemeAll = __RT.LayoutThemeAll; export { LayoutThemeAll };
}
declare module 'react-toolbox/lib/overlay/Overlay' {
  const Overlay: typeof __RT.Overlay; export default Overlay;
  type OverlayTheme = __RT.OverlayTheme; export { OverlayTheme };
}
declare module 'react-toolbox/lib/layout/Panel' {
  const Panel: typeof __RT.Panel; export default Panel;
  type PanelTheme = __RT.PanelTheme; export { PanelTheme };
}
declare module 'react-toolbox/lib/layout/NavDrawer' {
  const NavDrawer: typeof __RT.NavDrawer; export default NavDrawer;
  type NavDrawerTheme = __RT.NavDrawerTheme; export { NavDrawerTheme };
}
declare module 'react-toolbox/lib/layout/Sidebar' {
  const Sidebar: typeof __RT.Sidebar; export default Sidebar;
  type SidebarTheme = __RT.SidebarTheme; export { SidebarTheme };
}
declare module 'react-toolbox/lib/link/Link' {
  const Link: typeof __RT.Link; export default Link;
  type LinkTheme = __RT.LinkTheme; export { LinkTheme };
}
declare module 'react-toolbox/lib/list/List' {
  const List: typeof __RT.List; export default List;
  type ListTheme = __RT.ListTheme; export { ListTheme };
  type ListThemeAll = __RT.ListThemeAll; export { ListThemeAll };
}
declare module 'react-toolbox/lib/list/ListItem' {
  const ListItem: typeof __RT.ListItem; export default ListItem;
  type ListItemTheme = __RT.ListItemTheme; export { ListItemTheme };
}
declare module 'react-toolbox/lib/list/ListCheckbox' {
  const ListCheckbox: typeof __RT.ListCheckbox; export default ListCheckbox;
  type ListCheckboxTheme = __RT.ListCheckboxTheme; export { ListCheckboxTheme };
}
declare module 'react-toolbox/lib/list/ListSubHeader' {
  const ListSubHeader: typeof __RT.ListSubHeader; export default ListSubHeader;
  type ListSubHeaderTheme = __RT.ListSubHeaderTheme; export { ListSubHeaderTheme };
}
declare module 'react-toolbox/lib/list/ListDivider' {
  const ListDivider: typeof __RT.ListDivider; export default ListDivider;
  type ListDividerTheme = __RT.ListDividerTheme; export { ListDividerTheme };
}
declare module 'react-toolbox/lib/menu/Menu' {
  const Menu: typeof __RT.Menu; export default Menu;
  type MenuTheme = __RT.MenuTheme; export { MenuTheme };
  type MenuThemeAll = __RT.MenuThemeAll; export { MenuThemeAll };
}
declare module 'react-toolbox/lib/menu/IconMenu' {
  const IconMenu: typeof __RT.IconMenu; export default IconMenu;
  type IconMenuTheme = __RT.IconMenuTheme; export { IconMenuTheme };
}
declare module 'react-toolbox/lib/menu/MenuItem' {
  const MenuItem: typeof __RT.MenuItem; export default MenuItem;
  type MenuItemTheme = __RT.MenuItemTheme; export { MenuItemTheme };
}
declare module 'react-toolbox/lib/menu/MenuDivider' {
  const MenuDivider: typeof __RT.MenuDivider; export default MenuDivider;
  type MenuDividerTheme = __RT.MenuDividerTheme; export { MenuDividerTheme };
}
declare module 'react-toolbox/lib/navigation/Navigation' {
  const Navigation: typeof __RT.Navigation; export default Navigation;
  type NavigationTheme = __RT.NavigationTheme; export { NavigationTheme };
}
declare module 'react-toolbox/lib/progress_bar/ProgressBar' {
  const ProgressBar: typeof __RT.ProgressBar; export default ProgressBar;
  type ProgressBarTheme = __RT.ProgressBarTheme; export { ProgressBarTheme };
}
declare module 'react-toolbox/lib/radio/RadioGroup' {
  const RadioGroup: typeof __RT.RadioGroup; export default RadioGroup;
}
declare module 'react-toolbox/lib/radio/RadioButton' {
  const RadioButton: typeof __RT.RadioButton; export default RadioButton;
  type RadioButtonTheme = __RT.RadioButtonTheme; export { RadioButtonTheme };
}
declare module 'react-toolbox/lib/ripple/Ripple' {
  const Ripple: typeof __RT.Ripple; export default Ripple;
  type RippleTheme = __RT.RippleTheme; export { RippleTheme };
}
declare module 'react-toolbox/lib/slider/Slider' {
  const Slider: typeof __RT.Slider; export default Slider;
  type SliderTheme = __RT.SliderTheme; export { SliderTheme };
}
declare module 'react-toolbox/lib/snackbar/Snackbar' {
  const Snackbar: typeof __RT.Snackbar; export default Snackbar;
  type SnackbarTheme = __RT.SnackbarTheme; export { SnackbarTheme };
}
declare module 'react-toolbox/lib/switch/Switch' {
  const Switch: typeof __RT.Switch; export default Switch;
  type SwitchTheme = __RT.SwitchTheme; export { SwitchTheme };
}
declare module 'react-toolbox/lib/table/Table' {
  const Table: typeof __RT.Table; export default Table;
  type TableTheme = __RT.TableTheme; export { TableTheme };
}
declare module 'react-toolbox/lib/tabs/Tab' {
  const Tab: typeof __RT.Tab; export default Tab;
  type TabTheme = __RT.TabTheme; export { TabTheme };
}
declare module 'react-toolbox/lib/tabs/Tabs' {
  const Tabs: typeof __RT.Tabs; export default Tabs;
  type TabsTheme = __RT.TabsTheme; export { TabsTheme };
  type TabsThemeAll = __RT.TabsThemeAll; export { TabsThemeAll };
}
declare module 'react-toolbox/lib/time_picker/TimePicker' {
  const TimePicker: typeof __RT.TimePicker; export default TimePicker;
  type TimePickerTheme = __RT.TimePickerTheme; export { TimePickerTheme };
}
declare module 'react-toolbox/lib/tooltip/Tooltip' {
  const Tooltip: typeof __RT.Tooltip; export default Tooltip;
  type TooltipTheme = __RT.TooltipTheme; export { TooltipTheme };
}
