import React from 'react';
//import * as DCourse from '../dom';
import { Tag } from './tag';

export class EvalControl<P extends DCourse.IEvalControlProps, S extends DCourse.IEvalControlState> extends Tag<P, S> {
}

export class HumanEval<P extends DCourse.IHumanEvalProps, S extends DCourse.IHumanEvalState> extends EvalControl<P, S> {
}
export class EvalButton extends EvalControl<DCourse.IEvalButtonProps, DCourse.IEvalButtonState> { }

export class RadioButton extends EvalControl<DCourse.IRadioButtonProps, DCourse.IRadioButtonState> {
}
export class Pairing extends EvalControl<DCourse.IPairingProps, DCourse.IPairingState> {
}
export class WordSelection extends EvalControl<DCourse.IWordSelectionProps, DCourse.IWordSelectionState> {
}
export class WordMultiSelection extends EvalControl<DCourse.IWordMultiSelectionProps, DCourse.IWordMultiSelectionState> {
}
export class WordOrdering extends EvalControl<DCourse.IWordOrderingProps, DCourse.IWordOrderingState> {
}
export class SentenceOrdering extends EvalControl<DCourse.ISentenceOrderingProps, DCourse.ISentenceOrderingState> {
}
export class Extension extends EvalControl<DCourse.IExtensionProps, DCourse.IExtensionState> {
}
export class Writing extends HumanEval<DCourse.IWritingProps, DCourse.IWritingState> {
}
export class Recording extends HumanEval<DCourse.IRecordingProps, DCourse.IRecordingState> {
}

export class CheckLow<P extends DCourse.ICheckLowProps, S extends DCourse.ICheckLowState> extends EvalControl<P, S> {
}
export class CheckItem extends CheckLow<DCourse.ICheckItemProps, DCourse.ICheckItemState> {
}
export class CheckBox extends CheckLow<DCourse.ICheckBoxProps, DCourse.ICheckBoxState> {
}
