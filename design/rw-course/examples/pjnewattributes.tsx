import React from 'react'; import course, {$rc, $loc, Page, RadioButton, CheckItem} from 'rw-course'; export default () => /*
*********** START MARKUP HERE: */
<Page title="writing">
  <p>
    <RadioButton initValue={true} evalGroup="rb1" evalAnd={true}>rb1</RadioButton>
  </p>
  <p>
    <RadioButton correctValue={true} evalGroup="rb1" evalAnd={true}>rb2</RadioButton>
  </p>
  <p>
    <RadioButton readOnly={true} evalGroup="rb2" evalAnd={true}>rb1</RadioButton>
    <RadioButton initValue={true} evalGroup="rb2" evalAnd={true}>rb2</RadioButton>
  </p>
  <p>
    <RadioButton readOnly={true} evalGroup="rb3" evalAnd={true}>rb1</RadioButton>
    <RadioButton evalGroup="rb3" evalAnd={true}>rb2</RadioButton>
  </p>
  <p>
    <RadioButton skipEvaluation={true} evalGroup="rb4" evalAnd={true}>rb1</RadioButton>
    <RadioButton evalGroup="rb4" evalAnd={true}>rb2</RadioButton>
  </p>
  <p>
    <RadioButton skipEvaluation={true} evalGroup="rb5" evalAnd={true}>rb1</RadioButton>
    <RadioButton initValue={true} evalGroup="rb5" evalAnd={true}>rb2</RadioButton>
  </p>
  <p>
    <CheckItem initValue='true' correctValue={false} textType='trueFalse'>cb1</CheckItem>
  </p>
  <p>
    <CheckItem skipEvaluation={true}>cb1</CheckItem>
  </p>
  <p>
    <CheckItem skipEvaluation={true} initValue='true' ></CheckItem>
  </p>
  <p>
    <CheckItem skipEvaluation={true} initValue='false'>cb1</CheckItem>
  </p>
  <p>
    <CheckItem readOnly={true}>cb1</CheckItem>
  </p>
  <p>
    <CheckItem readOnly={true} initValue='true'>cb1</CheckItem>
  </p>
  <p>
    <CheckItem readOnly={true} initValue='false'>cb1</CheckItem>
  </p>
</Page>