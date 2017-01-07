import * as React from 'react';
import * as objects from '../dom';
import { registerTag } from '../compiler';
import { Tag } from './tag';

export class DocExample extends Tag<objects.IDocExampleProps, objects.ITagState> { }
registerTag(DocExample);
export class DocDescr extends Tag<objects.ITagProps, objects.ITagState> { }
registerTag(DocDescr);
export class Macro<P extends objects.IMacroProps, S extends objects.IMacroState> extends Tag<P, S> {
}
export class HeaderProp extends Tag<objects.IHeaderPropProps, objects.IHeaderPropState> {
}
registerTag(HeaderProp);
export class PairingItem extends Tag<objects.IPairingItemProps, objects.IPairingItemState> {
}
export class SingleChoice extends Tag<objects.ISingleChoiceProps, objects.ISingleChoiceState> {
}
export class SentenceOrderingItem extends Tag<objects.ISentenceOrderingItemProps, objects.ISentenceOrderingItemState> {
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