declare namespace __RT {
  import React = __React;

  interface FontIconProps extends Props {
    /**
     * Children to pass through the component.
     */
    children?: React.ReactNode;
    /**
     * The key string for the icon you want be displayed.
     */
    value?: React.ReactNode | string;
  }

  export class FontIcon extends React.Component<FontIconProps, {}> { }

}
