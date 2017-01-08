import React from 'react'; import course, { $rc, $loc, Page, GapFill, SingleChoice, RadioButton, CheckItem } from 'rw-course'; export default () => /*
*********** START MARKUP HERE: */
  <Page title="writing">
    <p>
      <GapFill skipEvaluation={true} initValue="skip evaluation gap fill" />
    </p>
    <p>
      <GapFill initValue="normal gap fill" correctValue="OK" />
    </p>
    <p>
      <GapFill correctValue="OK" />
    </p>
    <p>
      <GapFill readOnly={true} initValue="read only gap fill" />
    </p>
    <p>
      <GapFill skipEvaluation={true} initValue="skip evaluation gap fill" />
    </p>
    <p>
      <GapFill skipEvaluation={true} />
    </p>
    <p>
      <SingleChoice>
        <RadioButton correctValue={true}>rb1</RadioButton>
        <RadioButton>rb2</RadioButton>
      </SingleChoice>
    </p>
    <p>
      <SingleChoice>
        <RadioButton correctValue={true}>rb1</RadioButton>
        <RadioButton initValue={true}>rb2</RadioButton>
      </SingleChoice>
    </p>
    <p>
      <SingleChoice readOnly={true}>
        <RadioButton>rb1</RadioButton>
        <RadioButton>rb2</RadioButton>
      </SingleChoice>
    </p>
    <p>
      <SingleChoice skipEvaluation={true}>
        <RadioButton>rb1</RadioButton>
        <RadioButton initValue={true}>rb2</RadioButton>
      </SingleChoice>
    </p>
    <p>
      <RadioButton initValue={true} evalGroup="and-rb1">rb1</RadioButton>
      <RadioButton correctValue={true} evalGroup="and-rb1">rb2</RadioButton>
    </p>
    <p>
      <RadioButton readOnly={true} evalGroup="and-rb2">rb1</RadioButton>
      <RadioButton initValue={true} evalGroup="and-rb2">rb2</RadioButton>
    </p>
    <p>
      <RadioButton readOnly={true} evalGroup="and-rb3">rb1</RadioButton>
      <RadioButton evalGroup="and-rb3">rb2</RadioButton>
    </p>
    <p>
      <RadioButton skipEvaluation={true} evalGroup="and-rb4">rb1</RadioButton>
      <RadioButton evalGroup="and-rb4">rb2</RadioButton>
    </p>
    <p>
      <RadioButton skipEvaluation={true} evalGroup="and-rb5">rb1</RadioButton>
      <RadioButton initValue={true} evalGroup="and-rb5">rb2</RadioButton>
    </p>
    <p>
      <CheckItem initValue={course.threeStateBool.true} correctValue={false}>cb1</CheckItem>
    </p>
    <p>
      <CheckItem skipEvaluation={true}>cb1</CheckItem>
    </p>
    <p>
      <CheckItem skipEvaluation={true} initValue={course.threeStateBool.true}>cb1</CheckItem>
    </p>
    <p>
      <CheckItem skipEvaluation={true} initValue={course.threeStateBool.false}>cb1</CheckItem>
    </p>
    <p>
      <CheckItem readOnly={true}>cb1</CheckItem>
    </p>
    <p>
      <CheckItem readOnly={true} initValue={course.threeStateBool.true}>cb1</CheckItem>
    </p>
    <p>
      <CheckItem readOnly={true} initValue={course.threeStateBool.false}>cb1</CheckItem>
    </p>
  </Page>