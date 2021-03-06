﻿import config from 'rw-config';

//export interface IMeta {
//  title: string;
//  url: string;
//}

//export const createMeta = (__moduleName: string, loc: DLoc.ILocItem, locDefault?: string): IMeta => ({ title: $l(loc, locDefault), url: toGlobId(__moduleName) });

export const toGlobId = (__moduleName: string) => {
  if (!__moduleName.startsWith(config.rootPath)) throw new Error(__moduleName);
  __moduleName = __moduleName.substr(config.rootPath.length);
  const idx = __moduleName.indexOf('.');
  return __moduleName.substr(0, idx);
};

const missingValue = '???Missing loc value???';

export const $l = (map: DLoc.ILocItem, value?: string) => {
  if (!map) return value || missingValue; 
  return map[config.initLoc] || map['en-gb'] || value || missingValue;
};
