import React from 'react'; import { $rc, $loc, Body, DocExample, HeaderProp, DocDescr, GapFill, InlineTag, SmartElement, Offering } from 'rw-course'; export default () => /*
*********** START MARKUP HERE: */
  <Body title="" className="app-doc">
    <DocExample id="basic-example">
      <HeaderProp>
        <h3>Basic example</h3>
      </HeaderProp>
      <DocDescr>xxx</DocDescr>
      <GapFill correctValue="correct" />
    </DocExample>
    <DocExample id="with-init">
      <HeaderProp>
        <h3>With init-value</h3>
      </HeaderProp>
      <DocDescr></DocDescr>
      <GapFill correctValue="correct" initValue="init value" />
    </DocExample>
    <DocExample id="with-place-holder">
      <HeaderProp>
        <h3>With place-holder</h3>
      </HeaderProp>
      <DocDescr></DocDescr>
      <GapFill hint="Fill answer to question" correctValue="correct" />
    </DocExample>
    <DocExample id="case-sensitive">
      <HeaderProp>
        <h3>Case sensitive evaluation</h3>
      </HeaderProp>
      <DocDescr></DocDescr>
      <GapFill correctValue="CorRecT" />
      <GapFill correctValue="CorRecT" caseSensitive={true} />
    </DocExample>
    <DocExample id="smart-evaluation">
      <HeaderProp>
        <h3>Evaluation details</h3>
      </HeaderProp>
      <DocDescr>TODO: urcit a popsat pravidla difotniho chytreho vyhodnoceni</DocDescr>
      <GapFill correctValue="That's!" />
    </DocExample>
    <DocExample id="with-width">
      <HeaderProp>
        <h3>Setting width</h3>
      </HeaderProp>
      <DocDescr>Bez nastaveni sirky: nastavi se sirka, aby se vesly vsechny spravne odpovedi, init-value i placeholder.</DocDescr>
      <GapFill correctValue="c" />
      <GapFill correctValue="c1" />
      <GapFill correctValue="c12" />
      <GapFill correctValue="c123" />
      <GapFill correctValue="c1234" />
      <GapFill correctValue="c1" />
      <GapFill correctValue="c1|c1-c1-c1" />
      <GapFill hint="pl pl pl pl" correctValue="c1" />
      <GapFill correctValue="c1-c1-c1-c1-c1-c1|c1" />
      <GapFill correctValue="correct" className="W(150px)" />
      <GapFill correctValue="correct" className="W(20em)" />
    </DocExample>
    <DocExample id="with-css">
      <HeaderProp>
        <h3>Use CSS</h3>
      </HeaderProp>
      <DocDescr>Details about using CSS see TODO</DocDescr>
      <div styleSheet={{ GapFill: { width: 150 } }}>
        <GapFill correctValue="correct" />
      </div>
      <GapFill correctValue="correct" />
    </DocExample>
    <DocExample id="more-same-width">
      <HeaderProp>
        <h3>More gap-fills witr fixed width</h3>
      </HeaderProp>
      <DocDescr></DocDescr>
      <div styleSheet={{ GapFill: { width: 150 } }}>
        <GapFill correctValue="c1" />
        <GapFill correctValue="correct" />
      </div>
      <div styleSheet={{ GapFill: { width: "20em" } }}>
        <GapFill correctValue="correct" />
        <GapFill correctValue="c1" />
      </div>
    </DocExample>
    <DocExample id="more-smart-width">
      <HeaderProp>
        <h3>More gap-fills with smart width</h3>
      </HeaderProp>
      <DocDescr>sirka skupiny gap-fill se stejnou hodnotou smart-width atributu je rovna nejsirsimu gap-fill teto skupiny</DocDescr>
      <GapFill correctValue="c1" widthGroup="g1" />
      <GapFill correctValue="c1-c1-c1" widthGroup="g1" />
      <GapFill correctValue="c1" widthGroup="g2" />
      <GapFill correctValue="c1-c1-c1-c1-c1-c1-c1-c1" widthGroup="g2" />
    </DocExample>
    <DocExample id="more-smart-width-css">
      <HeaderProp>
        <h3>... by means with CSS</h3>
      </HeaderProp>
      <DocDescr></DocDescr>
      <div styleSheet={{ GapFill: { widthGroup: 'g1' } }}>
        <GapFill correctValue="c1" />
        <GapFill correctValue="c1-c1-c1" />
      </div>
      <div styleSheet={{ GapFill: { widthGroup: 'g1' } }}>
        <GapFill correctValue="c1" />
        <GapFill correctValue="c1-c1-c1-c1-c1-c1-c1-c1" />
      </div>
    </DocExample>
    <DocExample id="more-smart-width-css2">
      <HeaderProp>
        <h3>... other CSS usage</h3>
      </HeaderProp>
      <DocDescr></DocDescr>
      <div styleSheet={{ whenClass: { cls1: { GapFill: { widthGroup: 'g1' } }, cls2: { GapFill: { widthGroup: 'g2' } } } }}>
        <GapFill correctValue="c1" className="cls1" />
        <GapFill correctValue="c1-c1-c1" className="cls1" />
        <GapFill correctValue="c1" className="cls2" />
        <GapFill correctValue="c1-c1-c1-c1-c1-c1-c1-c1" className="cls2" />
      </div>
    </DocExample>
    <DocExample id="exchangeable">
      <HeaderProp>
        <h3>Exchangeable gap-fill values</h3>
      </HeaderProp>
      <DocDescr>TODO: jak se chova pri vice correct values?</DocDescr>
      <div styleSheet={{ GapFill: { evalGroup: ['g1', 'exchangeable', '' ] } }}>
        <GapFill correctValue="c1" />
        <GapFill correctValue="c2" />
        <GapFill correctValue="c3" />
      </div>
      <div styleSheet={{ GapFill: { evalGroup: ['g2', 'exchangeable', ''] } }}>
        <GapFill correctValue="c4" />
        <GapFill correctValue="c5" />
        <GapFill correctValue="c6" />
      </div>
    </DocExample>
    <DocExample id="and-eval">
      <HeaderProp>
        <h3>AND evaluation predicate</h3>
      </HeaderProp>
      <DocDescr>Je-li jediny element ze skupiny elementu se stejnou hodnotou atributu 'eval-and' vyplnen spatne, je cela skupina povazovana za spatne vyplnenou.</DocDescr>
      <div styleSheet={{ GapFill: { evalGroup: ['g3', '', 'and'] } }}>
        <GapFill correctValue="c1" />
        <GapFill correctValue="c2" />
      </div>
    </DocExample>
    <DocExample id="and-exchangeable">
      <HeaderProp>
        <h3>Both AND evaluation predicate and Exchangeable gap-fill value</h3>
      </HeaderProp>
      <DocDescr></DocDescr>
      <div styleSheet={{ GapFill: { evalGroup: ['g3', 'exchangeable', 'and'] } }}>
        <GapFill correctValue="c1" />
        <GapFill correctValue="c2" />
      </div>
    </DocExample>
    <DocExample id="inline-tag">
      <HeaderProp>
        <h3>Inline gap-fill</h3>
      </HeaderProp>
      <DocDescr></DocDescr>
      <div>Lorem<InlineTag>gapFill:c1|c2</InlineTag>Lorem</div>
    </DocExample>
    <DocExample id="force-inline-tag">
      <HeaderProp>
        <h3>Inline gap-fill (with inline-type)</h3>
      </HeaderProp>
      <DocDescr></DocDescr>
      <div>Lorem<InlineTag inlineType='GapFill'>c1|c2</InlineTag>Lorem</div>
    </DocExample>
    <DocExample id="inline-force">
      <HeaderProp>
        <h3>Inline gap-fill in smart-element</h3>
      </HeaderProp>
      <DocDescr></DocDescr>
      <SmartElement cdata={`
Lorem {+gap-fill c1|c2} Lorem {+gap-fill c3}
`} />
    </DocExample>
    <DocExample id="inline-css" todo>
      <HeaderProp>
        <h3>Inline gap-fill in smart-element and CSS</h3>
      </HeaderProp>
      <DocDescr></DocDescr>
      <SmartElement inlineType='GapFill' styleSheet={{ GapFill: { widthGroup: 'g5', evalGroup: ['g5', 'exchangeable', 'and'] } }} cdata={`
First Header  | Second Header
------------- | -------------
Lorem {+ c1 c1 c1 c1 c1 c1|c2} | Lorem {+ c3}
Content Cell  | Content Cell        
`} />
    </DocExample>
    <DocExample id="empty-correct-value" todo>
      <HeaderProp>
        <h3>gap-fill empty correct value</h3>
      </HeaderProp>
      <DocDescr></DocDescr>
      <div>
        <GapFill correctValue="ok1|" />,{' '}<GapFill correctValue="" /></div>
    </DocExample>
    <DocExample id="with-offering" todo>
      <HeaderProp>
        <h3>gap-fill with offering</h3>
      </HeaderProp>
      <DocDescr></DocDescr>
      <Offering id="offering-1" words="wrong 1|wrong 2" />
      <br />
      <GapFill correctValue="ok1" offeringId="offering-1" />
      <br />
      <GapFill correctValue="ok2" offeringId="offering-1" />
    </DocExample>
    <DocExample id="macro" todo>
      <HeaderProp>
        <h3>Inline gap-fill in macros</h3>
      </HeaderProp>
      <DocDescr>Details about using inline smart-elements see TODO</DocDescr>
      <SmartElement inlineType='GapFill'></SmartElement>
    </DocExample>
  </Body >