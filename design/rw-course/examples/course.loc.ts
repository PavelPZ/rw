import { ILocItem, toGlobId } from "rw-lib/loc"; declare const __moduleName: string; const globId = toGlobId(__moduleName);

//********** WRITE LOCALIZED STRING HERE 
const title: ILocItem = {
  "en-gb": 'English course',
  "cs-cz": 'Kurz angličtiny'
};
//********** WRITE LOCALIZED END

const res = { [globId]: { title } }; export default res;
