declare namespace __RT {
  import React = __React;
  export interface OverlayTheme {
    active?: string;
    backdrop?: string;
    invisible?: string;
    overlay?: string;
  }

  interface OverlayProps {
    theme?: OverlayTheme;
    active?: boolean;
    invisible?: boolean;
    onClick?: Function;
    onEscKeyDown?: Function;
  }

  export class Overlay extends React.Component<OverlayProps, {}> { }

}
