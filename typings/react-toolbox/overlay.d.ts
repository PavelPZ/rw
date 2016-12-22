declare namespace __RT {
  
  interface OverlayTheme {
    active?: string;
    backdrop?: string;
    invisible?: string;
    overlay?: string;
  }

  interface OverlayProps extends Props {
    theme?: OverlayTheme;
    active?: boolean;
    invisible?: boolean;
    onClick?: Function;
    onEscKeyDown?: Function;
  }

  class Overlay extends React.Component<OverlayProps, {}> { }

}
