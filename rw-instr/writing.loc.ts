import { toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const globId = toGlobId(__moduleName);
const th381: DLoc.ILocItem = {
  'en-gb': 'WRITING',
};
const tp381: DLoc.ILocItem = {
  'en-gb': 'Your task is to write a text according to the assignment. We recommend to proceed as follows:',
};
const tli381: DLoc.ILocItem = {
  'en-gb': 'First, read the assigned topic and think what you will write about. We recommend to make a draft on a piece of paper.',
};
const tli382: DLoc.ILocItem = {
  'en-gb': 'Start to write the text using your keyboard. Above your text you can see an indicator counting how many words you have already written. The specified number of words is a recommendation which you should approach as much as possible.',
};
const res = { [globId]: { th381, tp381, tli381, tli382 } };
export default res;