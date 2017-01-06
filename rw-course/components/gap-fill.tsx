import * as React from 'react';
import * as objects from '../interfaces';
import course, { Edit } from '../course';

export class GapFill extends Edit<objects.IGapFillProps, objects.IGapFillState> {
}
objects.registerTag(GapFill);
