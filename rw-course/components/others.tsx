import * as React from 'react';
import * as dom from '../dom';
import { registerTag } from '../compiler';
import { Tag } from './tag';

export class DocExample extends Tag<dom.IDocExampleProps, dom.ITagState> { }
registerTag('DocExample', DocExample);
export class DocDescr extends Tag<dom.ITagProps, dom.ITagState> { }
registerTag('DocDescr', DocDescr);
export class Macro<P extends dom.IMacroProps, S extends dom.IMacroState> extends Tag<P, S> {
}
export class HeaderProp extends Tag<dom.IHeaderPropProps, dom.IHeaderPropState> {
}
registerTag('HeaderProp', HeaderProp);
export class PairingItem extends Tag<dom.IPairingItemProps, dom.IPairingItemState> {
}
export class SingleChoice extends Tag<dom.ISingleChoiceProps, dom.ISingleChoiceState> { }
export class SentenceOrderingItem extends Tag<dom.ISentenceOrderingItemProps, dom.ISentenceOrderingItemState> {
}
export class List extends Macro<dom.IListProps, dom.IListState> {
}
export class ListGroup extends Macro<dom.IListGroupProps, dom.IListGroupState> {
}
export class TwoColumn extends Macro<dom.ITwoColumnProps, dom.ITwoColumnState> {
}
export class Panel extends Macro<dom.IPanelProps, dom.IPanelState> {
}
export class Dummy extends Tag<dom.IDummyProps, dom.IDummyState> {
}
export class Offering extends Tag<dom.IOfferingProps, dom.IOfferingState> {
}
export class UrlTag<P extends dom.IUrlTagProps, S extends dom.IUrlTagState> extends Tag<P, S> {
}
export class MediaTag<P extends dom.IMediaTagProps, S extends dom.IMediaTagState> extends UrlTag<P, S> {
}
export class MediaBigMark extends MediaTag<dom.IMediaBigMarkProps, dom.IMediaBigMarkState> {
}
export class MediaPlayer extends MediaTag<dom.IMediaPlayerProps, dom.IMediaPlayerState> {
}
export class MediaVideo extends MediaTag<dom.IMediaVideoProps, dom.IMediaVideoState> {
}
export class MediaText extends MediaTag<dom.IMediaTextProps, dom.IMediaTextState> {
}
export class SndFile<P extends dom.ISndFileProps, S extends dom.ISndFileState> extends UrlTag<P, S> {
}
export class CutDialog extends SndFile<dom.ICutDialogProps, dom.ICutDialogState> {
}
export class CutText extends SndFile<dom.ICutTextProps, dom.ICutTextState> {
}
export class Phrase extends Tag<dom.IPhraseProps, dom.IPhraseState> {
}
export class Replica extends Tag<dom.IReplicaProps, dom.IReplicaState> {
}
export class Include<P extends dom.IIncludeProps, S extends dom.IIncludeState> extends Tag<P, S> {
}
export class IncludeText extends Include<dom.IIncludeTextProps, dom.IIncludeTextState> {
}
export class IncludeDialog extends Include<dom.IIncludeDialogProps, dom.IIncludeDialogState> {
}
export class PhraseReplace extends Tag<dom.IPhraseReplaceProps, dom.IPhraseReplaceState> {
}
export class MacroTemplate<P extends dom.IMacroTemplateProps, S extends dom.IMacroTemplateState> extends Macro<P, S> {
}
export class MacroTrueFalse extends MacroTemplate<dom.IMacroTrueFalseProps, dom.IMacroTrueFalseState> {
}
export class MacroSingleChoices extends MacroTemplate<dom.IMacroSingleChoicesProps, dom.IMacroSingleChoicesState> {
}
export class MacroPairing extends MacroTemplate<dom.IMacroPairingProps, dom.IMacroPairingState> {
}
export class MacroTable extends MacroTemplate<dom.IMacroTableProps, dom.IMacroTableState> {
}
export class MacroListWordOrdering extends MacroTemplate<dom.IMacroListWordOrderingProps, dom.IMacroListWordOrderingState> {
}
export class MacroList extends MacroTemplate<dom.IMacroListProps, dom.IMacroListState> {
}
export class MacroIconList extends MacroTemplate<dom.IMacroIconListProps, dom.IMacroIconListState> {
}
export class MacroArticle extends MacroTemplate<dom.IMacroArticleProps, dom.IMacroArticleState> {
}
export class MacroVocabulary extends MacroTemplate<dom.IMacroVocabularyProps, dom.IMacroVocabularyState> {
}
export class MacroVideo extends MacroTemplate<dom.IMacroVideoProps, dom.IMacroVideoState> {
}
export class InlineTag extends MacroTemplate<dom.IInlineTagProps, dom.IInlineTagState> {
}
export class SmartTag extends Tag<dom.ISmartTagProps, dom.ISmartTagState> {
}
export class SmartElementLow<P extends dom.ISmartElementLowProps, S extends dom.ISmartElementLowState> extends MacroTemplate<P, S> {
}
export class SmartElement extends SmartElementLow<dom.ISmartElementProps, dom.ISmartElementState> {
}
export class SmartOffering extends SmartElementLow<dom.ISmartOfferingProps, dom.ISmartOfferingState> {
}
export class SmartPairing extends SmartElementLow<dom.ISmartPairingProps, dom.ISmartPairingState> {
}