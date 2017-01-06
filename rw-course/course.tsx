import * as React from 'react';
import * as objects from './interfaces';

export class Tag<P extends objects.ITagProps, S extends objects.ITagState> extends React.Component<P, S> {
  render(): JSX.Element {
    switch (React.Children.count(this.props.children)) {
      case 0: return null;
      //case 1: return React.Children.toArray(this.props.children)[0] as React.ReactElement<any>;
      default: return <span>{this.props.children}</span>;
    }
  }
}
export class DocExample extends Tag<objects.IDocExampleProps, objects.ITagState> { }
objects.registerTag(DocExample);
export class DocDescr extends Tag<objects.ITagProps, objects.ITagState> { }
objects.registerTag(DocDescr);
export class EvalControl<P extends objects.IEvalControlProps, S extends objects.IEvalControlState> extends Tag<P, S> {
}
export class Macro<P extends objects.IMacroProps, S extends objects.IMacroState> extends Tag<P, S> {
}
export class HumanEval<P extends objects.IHumanEvalProps, S extends objects.IHumanEvalState> extends EvalControl<P, S> {
}
export class Edit<P extends objects.IEditProps, S extends objects.IEditState> extends EvalControl<P, S> {
}
export class Body extends Tag<objects.IBodyProps, objects.IBodyState> {
  constructor(props: objects.IBodyProps, context: any) { super(props, context); }
}
objects.registerTag(Body);

export class HeaderProp extends Tag<objects.IHeaderPropProps, objects.IHeaderPropState> {
}
objects.registerTag(HeaderProp);
export class EvalButton extends EvalControl<objects.IEvalButtonProps, objects.IEvalButtonState> {
}
export class DropDown extends Edit<objects.IDropDownProps, objects.IDropDownState> {
}

export class RadioButton extends EvalControl<objects.IRadioButtonProps, objects.IRadioButtonState> {
}
export class CheckLow<P extends objects.ICheckLowProps, S extends objects.ICheckLowState> extends EvalControl<P, S> {
}
export class CheckItem extends CheckLow<objects.ICheckItemProps, objects.ICheckItemState> {
}
export class CheckBox extends CheckLow<objects.ICheckBoxProps, objects.ICheckBoxState> {
}
export class PairingItem extends Tag<objects.IPairingItemProps, objects.IPairingItemState> {
}
export class Pairing extends EvalControl<objects.IPairingProps, objects.IPairingState> {
}
export class SingleChoice extends Tag<objects.ISingleChoiceProps, objects.ISingleChoiceState> {
}
export class WordSelection extends EvalControl<objects.IWordSelectionProps, objects.IWordSelectionState> {
}
export class WordMultiSelection extends EvalControl<objects.IWordMultiSelectionProps, objects.IWordMultiSelectionState> {
}
export class WordOrdering extends EvalControl<objects.IWordOrderingProps, objects.IWordOrderingState> {
}
export class SentenceOrdering extends EvalControl<objects.ISentenceOrderingProps, objects.ISentenceOrderingState> {
}
export class SentenceOrderingItem extends Tag<objects.ISentenceOrderingItemProps, objects.ISentenceOrderingItemState> {
}
export class Extension extends EvalControl<objects.IExtensionProps, objects.IExtensionState> {
}
export class Writing extends HumanEval<objects.IWritingProps, objects.IWritingState> {
}
export class Recording extends HumanEval<objects.IRecordingProps, objects.IRecordingState> {
}
export class List extends Macro<objects.IListProps, objects.IListState> {
}
export class ListGroup extends Macro<objects.IListGroupProps, objects.IListGroupState> {
}
export class TwoColumn extends Macro<objects.ITwoColumnProps, objects.ITwoColumnState> {
}
export class Panel extends Macro<objects.IPanelProps, objects.IPanelState> {
}
export class Dummy extends Tag<objects.IDummyProps, objects.IDummyState> {
}
export class Offering extends Tag<objects.IOfferingProps, objects.IOfferingState> {
}
export class UrlTag<P extends objects.IUrlTagProps, S extends objects.IUrlTagState> extends Tag<P, S> {
}
export class MediaTag<P extends objects.IMediaTagProps, S extends objects.IMediaTagState> extends UrlTag<P, S> {
}
export class MediaBigMark extends MediaTag<objects.IMediaBigMarkProps, objects.IMediaBigMarkState> {
}
export class MediaPlayer extends MediaTag<objects.IMediaPlayerProps, objects.IMediaPlayerState> {
}
export class MediaVideo extends MediaTag<objects.IMediaVideoProps, objects.IMediaVideoState> {
}
export class MediaText extends MediaTag<objects.IMediaTextProps, objects.IMediaTextState> {
}
export class SndFile<P extends objects.ISndFileProps, S extends objects.ISndFileState> extends UrlTag<P, S> {
}
export class CutDialog extends SndFile<objects.ICutDialogProps, objects.ICutDialogState> {
}
export class CutText extends SndFile<objects.ICutTextProps, objects.ICutTextState> {
}
export class Phrase extends Tag<objects.IPhraseProps, objects.IPhraseState> {
}
export class Replica extends Tag<objects.IReplicaProps, objects.IReplicaState> {
}
export class Include<P extends objects.IIncludeProps, S extends objects.IIncludeState> extends Tag<P, S> {
}
export class IncludeText extends Include<objects.IIncludeTextProps, objects.IIncludeTextState> {
}
export class IncludeDialog extends Include<objects.IIncludeDialogProps, objects.IIncludeDialogState> {
}
export class PhraseReplace extends Tag<objects.IPhraseReplaceProps, objects.IPhraseReplaceState> {
}
export class MacroTemplate<P extends objects.IMacroTemplateProps, S extends objects.IMacroTemplateState> extends Macro<P, S> {
}
export class MacroTrueFalse extends MacroTemplate<objects.IMacroTrueFalseProps, objects.IMacroTrueFalseState> {
}
export class MacroSingleChoices extends MacroTemplate<objects.IMacroSingleChoicesProps, objects.IMacroSingleChoicesState> {
}
export class MacroPairing extends MacroTemplate<objects.IMacroPairingProps, objects.IMacroPairingState> {
}
export class MacroTable extends MacroTemplate<objects.IMacroTableProps, objects.IMacroTableState> {
}
export class MacroListWordOrdering extends MacroTemplate<objects.IMacroListWordOrderingProps, objects.IMacroListWordOrderingState> {
}
export class MacroList extends MacroTemplate<objects.IMacroListProps, objects.IMacroListState> {
}
export class MacroIconList extends MacroTemplate<objects.IMacroIconListProps, objects.IMacroIconListState> {
}
export class MacroArticle extends MacroTemplate<objects.IMacroArticleProps, objects.IMacroArticleState> {
}
export class MacroVocabulary extends MacroTemplate<objects.IMacroVocabularyProps, objects.IMacroVocabularyState> {
}
export class MacroVideo extends MacroTemplate<objects.IMacroVideoProps, objects.IMacroVideoState> {
}
export class InlineTag extends MacroTemplate<objects.IInlineTagProps, objects.IInlineTagState> {
}
export class SmartTag extends Tag<objects.ISmartTagProps, objects.ISmartTagState> {
}
export class SmartElementLow<P extends objects.ISmartElementLowProps, S extends objects.ISmartElementLowState> extends MacroTemplate<P, S> {
}
export class SmartElement extends SmartElementLow<objects.ISmartElementProps, objects.ISmartElementState> {
}
export class SmartOffering extends SmartElementLow<objects.ISmartOfferingProps, objects.ISmartOfferingState> {
}
export class SmartPairing extends SmartElementLow<objects.ISmartPairingProps, objects.ISmartPairingState> {
}