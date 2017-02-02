import React from 'react';
//import * as DCourse from '../dom';
import { registerTag } from '../compiler';
import { Tag } from './tag';

export class DocExample extends Tag<DCourse.IDocExampleProps, DCourse.ITagState> { }
registerTag('DocExample', DocExample);
export class DocDescr extends Tag<DCourse.ITagProps, DCourse.ITagState> { }
registerTag('DocDescr', DocDescr);
export class Macro<P extends DCourse.IMacroProps, S extends DCourse.IMacroState> extends Tag<P, S> {
}
export class HeaderProp extends Tag<DCourse.IHeaderPropProps, DCourse.IHeaderPropState> {
}
registerTag('HeaderProp', HeaderProp);
export class PairingItem extends Tag<DCourse.IPairingItemProps, DCourse.IPairingItemState> {
}
export class SingleChoice extends Tag<DCourse.ISingleChoiceProps, DCourse.ISingleChoiceState> { }
export class SentenceOrderingItem extends Tag<DCourse.ISentenceOrderingItemProps, DCourse.ISentenceOrderingItemState> {
}
export class List extends Macro<DCourse.IListProps, DCourse.IListState> {
}
export class ListGroup extends Macro<DCourse.IListGroupProps, DCourse.IListGroupState> {
}
export class TwoColumn extends Macro<DCourse.ITwoColumnProps, DCourse.ITwoColumnState> {
}
export class Panel extends Macro<DCourse.IPanelProps, DCourse.IPanelState> {
}
export class Dummy extends Tag<DCourse.IDummyProps, DCourse.IDummyState> {
}
export class Offering extends Tag<DCourse.IOfferingProps, DCourse.IOfferingState> {
}
export class UrlTag<P extends DCourse.IUrlTagProps, S extends DCourse.IUrlTagState> extends Tag<P, S> {
}
export class MediaTag<P extends DCourse.IMediaTagProps, S extends DCourse.IMediaTagState> extends UrlTag<P, S> {
}
export class MediaBigMark extends MediaTag<DCourse.IMediaBigMarkProps, DCourse.IMediaBigMarkState> {
}
export class MediaPlayer extends MediaTag<DCourse.IMediaPlayerProps, DCourse.IMediaPlayerState> {
}
export class MediaVideo extends MediaTag<DCourse.IMediaVideoProps, DCourse.IMediaVideoState> {
}
export class MediaText extends MediaTag<DCourse.IMediaTextProps, DCourse.IMediaTextState> {
}
export class SndFile<P extends DCourse.ISndFileProps, S extends DCourse.ISndFileState> extends UrlTag<P, S> {
}
export class CutDialog extends SndFile<DCourse.ICutDialogProps, DCourse.ICutDialogState> {
}
export class CutText extends SndFile<DCourse.ICutTextProps, DCourse.ICutTextState> {
}
export class Phrase extends Tag<DCourse.IPhraseProps, DCourse.IPhraseState> {
}
export class Replica extends Tag<DCourse.IReplicaProps, DCourse.IReplicaState> {
}
export class Include<P extends DCourse.IIncludeProps, S extends DCourse.IIncludeState> extends Tag<P, S> {
}
export class IncludeText extends Include<DCourse.IIncludeTextProps, DCourse.IIncludeTextState> {
}
export class IncludeDialog extends Include<DCourse.IIncludeDialogProps, DCourse.IIncludeDialogState> {
}
export class PhraseReplace extends Tag<DCourse.IPhraseReplaceProps, DCourse.IPhraseReplaceState> {
}
export class MacroTemplate<P extends DCourse.IMacroTemplateProps, S extends DCourse.IMacroTemplateState> extends Macro<P, S> {
}
export class MacroTrueFalse extends MacroTemplate<DCourse.IMacroTrueFalseProps, DCourse.IMacroTrueFalseState> {
}
export class MacroSingleChoices extends MacroTemplate<DCourse.IMacroSingleChoicesProps, DCourse.IMacroSingleChoicesState> {
}
export class MacroPairing extends MacroTemplate<DCourse.IMacroPairingProps, DCourse.IMacroPairingState> {
}
export class MacroTable extends MacroTemplate<DCourse.IMacroTableProps, DCourse.IMacroTableState> {
}
export class MacroListWordOrdering extends MacroTemplate<DCourse.IMacroListWordOrderingProps, DCourse.IMacroListWordOrderingState> {
}
export class MacroList extends MacroTemplate<DCourse.IMacroListProps, DCourse.IMacroListState> {
}
export class MacroIconList extends MacroTemplate<DCourse.IMacroIconListProps, DCourse.IMacroIconListState> {
}
export class MacroArticle extends MacroTemplate<DCourse.IMacroArticleProps, DCourse.IMacroArticleState> {
}
export class MacroVocabulary extends MacroTemplate<DCourse.IMacroVocabularyProps, DCourse.IMacroVocabularyState> {
}
export class MacroVideo extends MacroTemplate<DCourse.IMacroVideoProps, DCourse.IMacroVideoState> {
}
export class InlineTag extends MacroTemplate<DCourse.IInlineTagProps, DCourse.IInlineTagState> {
}
export class SmartTag extends Tag<DCourse.ISmartTagProps, DCourse.ISmartTagState> {
}
export class SmartElementLow<P extends DCourse.ISmartElementLowProps, S extends DCourse.ISmartElementLowState> extends MacroTemplate<P, S> {
}
export class SmartElement extends SmartElementLow<DCourse.ISmartElementProps, DCourse.ISmartElementState> {
}
export class SmartOffering extends SmartElementLow<DCourse.ISmartOfferingProps, DCourse.ISmartOfferingState> {
}
export class SmartPairing extends SmartElementLow<DCourse.ISmartPairingProps, DCourse.ISmartPairingState> {
}