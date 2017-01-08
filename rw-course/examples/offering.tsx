import React from 'react'; import course, {$rc, $loc, Page, DocExample, HeaderProp, DocDescr, Offering, GapFill, DropDown} from 'rw-course'; export default () => /*
*********** START MARKUP HERE: */
<Page title="" className="app-doc">
  <DocExample id="basic-example">
    <HeaderProp>
      <h3>Basic example</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <Offering words="offer 1|offer 2|offer 3" />
  </DocExample>
  <DocExample id="basic-gap-fill">
    <HeaderProp>
      <h3>Offers from gap-fill</h3>
    </HeaderProp>
    <DocDescr>Opakujici se hodnoty jsou vzdy ignorovany</DocDescr>
    <Offering id="from-gap-fill" />
    <GapFill offeringId="from-gap-fill" correctValue="value1|value2" />
    <GapFill offeringId="from-gap-fill" correctValue="value3|value1" />
  </DocExample>
  <DocExample id="basic-gap-fill-css">
    <HeaderProp>
      <h3>Offers from gap-fill pomoci CSS</h3>
    </HeaderProp>
    <DocDescr>Atribut offering-id se nastavi vsem gap-fill elementum pomoci CSS. Details about using CSS see TODO.</DocDescr>
    <Offering id="from-gap-fill-css" />
    <div style-sheet="gap-fill {offering-id: from-gap-fill-css;}">
      <GapFill correctValue="value1|value2" />
      <GapFill correctValue="value3|value1" />
    </div>
  </DocExample>
  <DocExample id="basic-gap-fill-fake">
    <HeaderProp>
      <h3>Offers from gap-fill with fake offers</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <Offering id="from-gap-fill-fake" words="fake1|fake2" />
    <GapFill offeringId="from-gap-fill-fake" correctValue="value1" />
    <GapFill offeringId="from-gap-fill-fake" correctValue="value2" />
  </DocExample>
  <DocExample id="basic-drop-down">
    <HeaderProp>
      <h3>Offers from drop-down, kazda nabidka muze byt pouzita pouze jednou</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <Offering id="from-drop-down" />
    <div style-sheet="drop-down {offering-id: from-drop-down;}">
      <DropDown correctValue="value1" />
      <DropDown correctValue="value2" />
      <DropDown correctValue="value3" />
    </div>
  </DocExample>
  <DocExample id="basic-drop-down-keep">
    <HeaderProp>
      <h3>Offers from drop-down, nabidky mohou byt pouzity vicekrat</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <Offering id="from-drop-down-keep" mode={course.offeringDropDownMode.dropDownKeep} />
    <div style-sheet="drop-down {offering-id: from-drop-down-keep;}">
      <DropDown correctValue="value1" />
      <DropDown correctValue="value2" />
      <DropDown correctValue="value1" />
    </div>
  </DocExample>
</Page>