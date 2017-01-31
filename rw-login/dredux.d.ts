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
