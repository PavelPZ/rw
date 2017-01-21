import { ILocItem, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const globId = toGlobId(__moduleName);

//********** WRITE LOCALIZED STRING HERE 
const title: ILocItem = {
  "en-gb": 'Gap-fill exercise',
  "cs-cz": 'Cvičení Gap-fill'
};
const basicExample: ILocItem = {
  'en-gb': 'Basic example',
  "cs-cz": 'Základní příklad'
};
//...
const res = { [globId]: { title, basicExample } };
//********** WRITE LOCALIZED END

export default res;
