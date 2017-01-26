import * as React from 'react';
import * as objects from '../dom';
import { Tag } from './tag';

export class EvalControl<P extends objects.IEvalControlProps, S extends objects.IEvalControlState> extends Tag<P, S> {
}

export class HumanEval<P extends objects.IHumanEvalProps, S extends objects.IHumanEvalState> extends EvalControl<P, S> {
}
export class EvalButton extends EvalControl<objects.IEvalButtonProps, objects.IEvalButtonState> { }

export class RadioButton extends EvalControl<objects.IRadioButtonProps, objects.IRadioButtonState> {
}
export class Pairing extends EvalControl<objects.IPairingProps, objects.IPairingState> {
}
export class WordSelection extends EvalControl<objects.IWordSelectionProps, objects.IWordSelectionState> {
}
export class WordMultiSelection extends EvalControl<objects.IWordMultiSelectionProps, objects.IWordMultiSelectionState> {
}
export class WordOrdering extends EvalControl<objects.IWordOrderingProps, objects.IWordOrderingState> {
}
export class SentenceOrdering extends EvalControl<objects.ISentenceOrderingProps, objects.ISentenceOrderingState> {
}
export class Extension extends EvalControl<objects.IExtensionProps, objects.IExtensionState> {
}
export class Writing extends HumanEval<objects.IWritingProps, objects.IWritingState> {
}
export class Recording extends HumanEval<objects.IRecordingProps, objects.IRecordingState> {
}

export class CheckLow<P extends objects.ICheckLowProps, S extends objects.ICheckLowState> extends EvalControl<P, S> {
}
export class CheckItem extends CheckLow<objects.ICheckItemProps, objects.ICheckItemState> {
}
export class CheckBox extends CheckLow<objects.ICheckBoxProps, objects.ICheckBoxState> {
}
