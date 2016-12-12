declare namespace __RT {
  import React = __React;

  export interface AvatarTheme {
    /**
     * Used for the root class of the element.
     */
    avatar?: string;
    /**
     * Added to the root element when the component has image.
     */
    image?: string;
    /**
     * Used for the root element if the component shows the letter.
     */
    letter?: string;
  }

  interface AvatarProps extends Props {
    /**
     * Children to pass through the component.
     */
    children?: React.ReactNode;
    /**
     * Set to true if your image is not squared so it will be used as a cover for the element.
     */
    cover?: boolean;
    /**
     * A key to identify an Icon from Material Design Icons or a custom Icon Element.
     */
    icon?: React.ReactNode | string;
    /**
     * An image source or an image element.
     */
    image?: React.ReactNode | string;
    /**
     * Classnames object defining the component style.
     */
    theme?: AvatarTheme;
    /**
     * A title for the image. If no image is provided, the first letter will be displayed as the avatar.
     */
    title?: string;
  }

  export class Avatar extends React.Component<AvatarProps, {}> { }
}