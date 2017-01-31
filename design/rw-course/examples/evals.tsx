import React from 'react'; import course, {$rc, $loc, Page, DocExample, HeaderProp, DocDescr, GapFill, CheckItem, EvalButton, Offering, DropDown, RadioButton, WordSelection, Pairing, PairingItem} from 'rw-course'; export default () => /*
*********** START MARKUP HERE: */
<Page title="Evals groups and btns" className="app-doc">
  <DocExample>
    <HeaderProp>
      <h3>Normal evaluation</h3>
    </HeaderProp>
    <DocDescr>Example descr</DocDescr>
    <GapFill correctValue="ok1" />
    <br />
    <CheckItem correctValue={false}></CheckItem>
  </DocExample>
  <DocExample>
    <HeaderProp>
      <h3>AND evaluation (group)</h3>
    </HeaderProp>
    <DocDescr>Example descr</DocDescr>
    <GapFill evalGroup="group1" evalAnd={true} correctValue="ok1" />
    <br />
    <CheckItem evalGroup="group1" evalAnd={true} correctValue={false}></CheckItem>
  </DocExample>
  <DocExample>
    <HeaderProp>
      <h3>evaluation per partes (second part use AND evaluation)</h3>
    </HeaderProp>
    <DocDescr>Example descr</DocDescr>
    <p>
      <EvalButton id="g0"></EvalButton>
      <GapFill correctValue="ok1" evalButtonId="g0" />
      <CheckItem correctValue={false} evalButtonId="g0"></CheckItem>
    </p>
    <p>
      <EvalButton id="g1"></EvalButton>
      <GapFill evalGroup="group2" evalAnd={true} correctValue="ok2" evalButtonId="g1" />
      <CheckItem evalGroup="group2" evalAnd={true} correctValue={true} evalButtonId="g1">Question 1</CheckItem>
    </p>
  </DocExample>
  <DocExample>
    <HeaderProp>
      <h3>gap-fill normal</h3>
    </HeaderProp>
    <DocDescr>Example descr</DocDescr>
    <div>
      <GapFill correctValue="ok3" />
    </div>
    <div style-sheet="gap-fill, radio-button, word-selection, pairing, drop-down, check-item, offering { eval-btn-id:g0; } gap-fill {eval-group:and-g3-exchangeable; } drop-down {eval-group:and-g4-exchangeable; } radio-button {eval-group:and-g4; }">
      <div>
        <Offering id="off1" hidden={true} />
      </div>
      <div>
        <CheckItem correctValue={true} textType='trueFalse' />
      </div>
      <div>
        <GapFill correctValue="c1" />
        <GapFill correctValue="c2" />
      </div>
      <div>
        <DropDown correctValue="c1" offeringId="off1" />
        <DropDown correctValue="c2" offeringId="off1" />
      </div>
      <div>
        <RadioButton>possibility 1</RadioButton>
        <RadioButton correctValue={true}>possibility 2</RadioButton>
        <RadioButton>possibility 3</RadioButton>
      </div>
      <div>
        <WordSelection words="word1|word 2|#word 3" />
      </div>
      <div>
        <Pairing>
          <PairingItem right="Right 1">Left 1</PairingItem>
          <PairingItem right="Right 2">Left 2</PairingItem>
        </Pairing>
      </div>
    </div>
  </DocExample>
</Page>