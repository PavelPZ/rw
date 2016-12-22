declare namespace __RT {
  
  export interface OverlayTheme {
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

  export class Overlay extends React.Component<OverlayProps, {}> { }

}
