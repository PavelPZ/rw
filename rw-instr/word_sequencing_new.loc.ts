import { toGlobId } from 'rw-lib/index'; declare const __moduleName: string; const globId = toGlobId(__moduleName);
const th411: DLoc.ILocItem = {
  'en-gb': 'WORD SEQUENCING',
};
const tp411: DLoc.ILocItem = {
  'en-gb': 'Your task is to put the words into correct order. Proceed as follows:',
};
const tli411: DLoc.ILocItem = {
  'en-gb': 'Click on the word you wish to move.',
};
const tli412: DLoc.ILocItem = {
  'en-gb': 'The word will be moved to the list of ordered words.',
};
const tli413: DLoc.ILocItem = {
  'en-gb': 'To move any word back to the unsorted list, just click on it.',
};
const res = { [globId]: { th411, tp411, tli411, tli412, tli413 } };
export default res;