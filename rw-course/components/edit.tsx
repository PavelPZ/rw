import React from 'react';
//import * as DCourse from '../dom';
import { EvalControl } from './eval-control';

export class Edit<P extends DCourse.IEditProps, S extends DCourse.IEditState> extends EvalControl<P, S> {
}

export class DropDown extends Edit<DCourse.IDropDownProps, DCourse.IDropDownState> {
}

