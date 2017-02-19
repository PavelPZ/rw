import { toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const globId = toGlobId(__moduleName);
const th120: DLoc.ILocItem = {
  'en-gb': 'INFORMATION',
  'de-de': 'INFORMATION',
  'sp-sp': 'INFORMACIÓN',
  'cs-cz': 'INFORMACE',
  'sk-sk': 'INFORMÁCIE',
  'ru-ru': 'ИНФОРМАЦИЯ',
  'fr-fr': 'INFORMATIONS',
  'it-it': 'INFORMAZIONI',
  'pl-pl': 'INFORMACJA',
  'vi-vn': 'THÔNG TIN',
  'tr-tr': 'BİLGİ',
  'lt-lt': 'INFORMACIJA',
  'zh-cn': '信息',
  'bg-bg': 'ИНФОРМАЦИЯ',
  'bs': 'INFORMATION',
  'ar-sa': 'معلومات',
};
const tp94: DLoc.ILocItem = {
  'en-gb': 'Your task is to carefully read the information on this page.',
};
const res = { [globId]: { th120, tp94 } };
export default res;