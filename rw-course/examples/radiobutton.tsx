import React from 'react'; import course, {$rc, $loc, Page, DocExample, HeaderProp, DocDescr, RadioButton} from 'rw-course'; export default () => /*
*********** START MARKUP HERE: */
<Page title="" className="app-doc">
  <DocExample id="basic-example">
    <HeaderProp>
      <h3>Basic example</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <RadioButton evalGroup="g1" evalAnd={true} correctValue={true}>radio 1</RadioButton>
    <RadioButton evalGroup="g1" evalAnd={true}>radio 2</RadioButton>
  </DocExample>
</Page>