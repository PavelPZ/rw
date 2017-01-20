import { config } from 'config';

//export interface IMeta {
//  title: string;
//  url: string;
//}

//export const createMeta = (__moduleName: string, loc: ILocItem, locDefault?: string): IMeta => ({ title: $l(loc, locDefault), url: toGlobId(__moduleName) });

export const toGlobId = (__moduleName: string) => {
  if (!__moduleName.startsWith(config.rootPath)) throw new Error(__moduleName);
  __moduleName = __moduleName.substr(config.rootPath.length);
  const idx = __moduleName.indexOf('.');
  return __moduleName.substr(0, idx);
};

export const $l = (map: ILocItem, value?: string) => {
  let res = map[config.loc]; if (res) return res;
  res = map['en-gb']; if (res) return res;
  res = value; if (res) return res;
  return '???Missing loc value???';
};

export type Langs = "cs-cz" | "en-gb" | "de-de" | "sk-sk" | "fr-fr" | "it-it" | "sp-sp" | "ru-ru" | "vi-vn" | "es-es" | "fi-fi" | "sv-se" | "da-dk" | "nb-no" | "af-za" | "sq-al" | "ar-sa" | "hy-am" | "as-in" | "az-latn-az" | "eu-es" | "bn-in" | "be-by" | "pt-br" | "br-fr" | "bg-bg" | "fr-ca" | "zh-hk" | "ca-es" | "co-fr" | "hr-hr" | "nl-nl" | "en-us" | "et-ee" | "gl-es" | "ka-ge" | "el-gr" | "gu-in" | "ha-latn-ng" | "he-il" | "hi-in" | "hu-hu" | "zh-cn" | "is-is" | "ig-ng" | "id-id" | "ga-ie" | "ja-jp" | "kn-in" | "km-kh" | "ky-kg" | "ko-kr" | "lo-la" | "es-mx" | "lv-lv" | "lt-lt" | "mk-mk" | "ms-my" | "ml-in" | "mt-mt" | "mi-nz" | "mr-in" | "mn-mn" | "ne-np" | "oc-fr" | "ps-af" | "fa-ir" | "pl-pl" | "pt-pt" | "pa-in" | "quz-pe" | "ro-ro" | "sr-latn-cs" | "nso-za" | "si-lk" | "sl-si" | "sw-ke" | "ta-in" | "te-in" | "th-th" | "bo-cn" | "tn-za" | "tr-tr" | "uk-ua" | "ur-pk" | "uz-latn-uz" | "cy-gb" | "xh-za" | "yo-ng" | "zu-za" | "bs" | "en-nz" | "ku-arab";
export interface ILocItem {
  "cs-cz"?: string;
  "en-gb"?: string;
  "de-de"?: string;
  "sk-sk"?: string;
  "fr-fr"?: string;
  "it-it"?: string;
  "sp-sp"?: string;
  "ru-ru"?: string;
  "vi-vn"?: string;
  "es-es"?: string;
  "fi-fi"?: string;
  "sv-se"?: string;
  "da-dk"?: string;
  "nb-no"?: string;
  "af-za"?: string;
  "sq-al"?: string;
  "ar-sa"?: string;
  "hy-am"?: string;
  "as-in"?: string;
  "az-latn-az"?: string;
  "eu-es"?: string;
  "bn-in"?: string;
  "be-by"?: string;
  "pt-br"?: string;
  "br-fr"?: string;
  "bg-bg"?: string;
  "fr-ca"?: string;
  "zh-hk"?: string;
  "ca-es"?: string;
  "co-fr"?: string;
  "hr-hr"?: string;
  "nl-nl"?: string;
  "en-us"?: string;
  "et-ee"?: string;
  "gl-es"?: string;
  "ka-ge"?: string;
  "el-gr"?: string;
  "gu-in"?: string;
  "ha-latn-ng"?: string;
  "he-il"?: string;
  "hi-in"?: string;
  "hu-hu"?: string;
  "zh-cn"?: string;
  "is-is"?: string;
  "ig-ng"?: string;
  "id-id"?: string;
  "ga-ie"?: string;
  "ja-jp"?: string;
  "kn-in"?: string;
  "km-kh"?: string;
  "ky-kg"?: string;
  "ko-kr"?: string;
  "lo-la"?: string;
  "es-mx"?: string;
  "lv-lv"?: string;
  "lt-lt"?: string;
  "mk-mk"?: string;
  "ms-my"?: string;
  "ml-in"?: string;
  "mt-mt"?: string;
  "mi-nz"?: string;
  "mr-in"?: string;
  "mn-mn"?: string;
  "ne-np"?: string;
  "oc-fr"?: string;
  "ps-af"?: string;
  "fa-ir"?: string;
  "pl-pl"?: string;
  "pt-pt"?: string;
  "pa-in"?: string;
  "quz-pe"?: string;
  "ro-ro"?: string;
  "sr-latn-cs"?: string;
  "nso-za"?: string;
  "si-lk"?: string;
  "sl-si"?: string;
  "sw-ke"?: string;
  "ta-in"?: string;
  "te-in"?: string;
  "th-th"?: string;
  "bo-cn"?: string;
  "tn-za"?: string;
  "tr-tr"?: string;
  "uk-ua"?: string;
  "ur-pk"?: string;
  "uz-latn-uz"?: string;
  "cy-gb"?: string;
  "xh-za"?: string;
  "yo-ng"?: string;
  "zu-za"?: string;
  "bs"?: string;
  "en-nz"?: string;
  "ku-arab"?: string;
}

//export interface ILoc {
//  [id: string]: ILocItem;
//}
