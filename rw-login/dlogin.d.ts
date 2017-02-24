declare namespace DLogin {
  export type TProviderIds = 'google' | 'facebook' | 'msoft';

  export interface IProviderConfig {
    client_id?: string; //klic pro kumunikaci se serverem providera
    authorizationUrl?: string; //autorizacni URL providera
    profileUrl?: string; //url providera pro ziskani profile informaci
    scopes?: string; //identifikace udaju z profilu (email, ...) providera
    parseProfile?: (obj: any) => IResponse; //funkce na parsování providerem poskytnutého profilu
  }

  export interface IProviderConfigs {
    loginRoute: string;
    google: IProviderConfig;
    facebook: IProviderConfig;
    msoft: IProviderConfig;
  }

  export interface IRequest {
    providerId: TProviderIds;
    client_id: string; //string, povolujici konkretni alikaci se prihlasit u providera
    returnUrl: string; //return url for successfull login
  }

  export interface IResponse {
    providerId: TProviderIds;
    email: string; //uzivateluv email
    id: string; //id uzivatele u providera
    firstName?: string;
    lastName?: string;
  }

  export interface IClientIdsConfig {
    google: string;
    facebook: string;
    msoft: string;
  }
}

declare module '*.scss' {
  const content: any;
  export default content;
}