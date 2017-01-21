import { ILocItem, toGlobId } from 'rw-lib/loc'; declare const __moduleName: string; const globId = toGlobId(__moduleName);
const th311: ILocItem = {
  'en-gb': 'READING with TRUE/FALSE SENTENCES',
};
const tp311: ILocItem = {
  'en-gb': 'Your task is to decide on the correctness of statements based on the initial text. We recommend to proceed as follows:',
};
const tli311: ILocItem = {
  'en-gb': 'First, go through all the statements.',
};
const tli312: ILocItem = {
  'en-gb': 'Then, go back to the initial text above. Read the text carefully and try to capture the information concerning the individual statements. When reading, you can simultaneously mark the correct answers.',
};
const tli313: ILocItem = {
  'en-gb': 'If the statement is true, left click TRUE. If the statement is false, left click FALSE.',
};
const tli314: ILocItem = {
  'en-gb': 'If you wish to change your selection, click another option.',
};
const res = { [globId]: { th311, tp311, tli311, tli312, tli313, tli314 } };
export default res;