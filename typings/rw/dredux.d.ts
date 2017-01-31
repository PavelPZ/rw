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

declare namespace DRedux {
  interface IRootState {
    router?: DRouter.IRouteDir;
  }
}

declare namespace DRedux {
  interface IRootState {
    login?: ILoginState;
  }

  export interface ILoginState {
    isLogged?: boolean;
    email?: string;
    firstName?: string;
    lastName?: string;
    providerId?: string;
    returnUrl?: string;
  }
}

declare namespace DRedux {
  interface IRootState {
    courses?: DCourse.ICoursesState;
  }
}

