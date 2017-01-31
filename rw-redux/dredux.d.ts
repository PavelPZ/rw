declare namespace DRedux {
  interface IRootState {
    gui?: IMatchMediaState;
    blockGui?: IBlockGuiState;
  }
  export interface IBlockGuiState { counter: number; }
  interface IMatchMediaState {
    xxs: boolean;
    xs: boolean;
    smTablet: boolean;
    sm: boolean;
    md: boolean;
    lgTablet: boolean;
    lg: boolean;
    xl: boolean;
    xxl: boolean;
    xxxl: boolean;
  }
}
