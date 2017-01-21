import { ILocItem, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const globId = toGlobId(__moduleName);
const th401: ILocItem = {
  'en-gb': 'SENTENCE SEQUENCING',
};
const tp401: ILocItem = {
  'en-gb': 'Your task is to put the sentences into correct order. Proceed as follows:',
};
const tli401: ILocItem = {
  'en-gb': 'Click on the sentence you wish to move.',
};
const tli402: ILocItem = {
  'en-gb': 'The sentence will be moved to the list of ordered sentences.',
};
const tli403: ILocItem = {
  'en-gb': 'To move any sentence back to the unsorted list, just click on it.',
};
const res = { [globId]: { th401, tp401, tli401, tli402, tli403 } };
export default res;