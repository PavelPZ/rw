import React from 'react';
//import * as DCourse from '../dom';
import { Edit } from './edit';
import { registerTag } from '../compiler';

export interface IGapFillState extends DCourse.IEditState {
}

export class GapFill extends Edit<DCourse.IGapFillProps, IGapFillState> {
}
registerTag('GapFill', GapFill);
