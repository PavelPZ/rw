import * as React from 'react';
import * as objects from '../dom';
import { EvalControl } from './eval-control';

export class Edit<P extends objects.IEditProps, S extends objects.IEditState> extends EvalControl<P, S> {
}

export class DropDown extends Edit<objects.IDropDownProps, objects.IDropDownState> {
}

