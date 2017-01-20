import { ILocItem, toGlobId } from "rw-lib/loc"; declare const __moduleName: string; const globId = toGlobId(__moduleName);

//********** WRITE LOCALIZED STRING HERE 
const title: ILocItem = {
  "en-gb": 'Capture 11',
  "cs-cz": 'Kapitola 11'
};
//********** WRITE LOCALIZED END

const res = { [globId]: { title } }; export default res;
