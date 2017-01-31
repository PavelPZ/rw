import React from 'react'; import course, {$rc, $loc, Page, DocExample, HeaderProp, DocDescr, SingleChoice, RadioButton, Panel, MediaText} from 'rw-course'; export default () => /*
*********** START MARKUP HERE: */
<Page title="Single Choice" className="app-doc">
  <DocExample>
    <HeaderProp>
      <h3>Simple</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <SingleChoice>
      <RadioButton>possibility 1</RadioButton>
      <RadioButton correctValue={true}>possibility 2</RadioButton>
      <RadioButton>possibility 3</RadioButton>
    </SingleChoice>
  </DocExample>
  <DocExample>
    <HeaderProp>
      <h3>With panel</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <Panel>
      <HeaderProp>
        <h4>Question</h4>
      </HeaderProp>
      <SingleChoice>
        <RadioButton evalGroup="g1" evalAnd={true}>possibility 1</RadioButton>
        <RadioButton evalGroup="g1" evalAnd={true} correctValue={true}>possibility 2</RadioButton>
        <RadioButton evalGroup="g1" evalAnd={true}>possibility 3</RadioButton>
      </SingleChoice>
    </Panel>
  </DocExample>
  <DocExample>
    <HeaderProp>
      <h3>With sound</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <SingleChoice>
      <RadioButton evalGroup="g2" evalAnd={true}>
        <MediaText subset="-2" cutUrl="media/media1"></MediaText>
      </RadioButton>
      <RadioButton correctValue={true} evalGroup="g2" evalAnd={true}>
        <MediaText subset="3" cutUrl="media/media1"></MediaText>
      </RadioButton>
      <RadioButton evalGroup="g2" evalAnd={true}>
        <MediaText subset="4-" cutUrl="media/media1"></MediaText>
      </RadioButton>
    </SingleChoice>
  </DocExample>
</Page>