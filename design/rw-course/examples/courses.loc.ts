import { toGlobId } from "rw-lib/loc"; declare const __moduleName: string; const globId = toGlobId(__moduleName);

//********** WRITE LOCALIZED STRING HERE 
const english: DLoc.ILocItem = {
  "en-gb": 'English courses',
  "cs-cz": 'Kurzy angličtiny'
};
//********** WRITE LOCALIZED END

const res = { [globId]: { english } }; export default res;
