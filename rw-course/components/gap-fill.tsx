import * as React from 'react';
import * as objects from '../dom';
import { Edit } from './edit';
import { registerTag } from '../compiler';

export interface IGapFillState extends objects.IEditState {
}

export class GapFill extends Edit<objects.IGapFillProps, IGapFillState> {
}
registerTag('GapFill', GapFill);
