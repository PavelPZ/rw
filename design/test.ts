import { preCompile } from 'rw-course';

import gapFill from '../rw-course/examples/gap-fill'

const precomp = preCompile(gapFill);

console.log(JSON.stringify(precomp, null, 2));