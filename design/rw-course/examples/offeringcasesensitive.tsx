import React from 'react'; import course, { $rc, $loc, Page, GapFill, Offering, DropDown } from 'rw-course'; import filling_in_from_a_list from "rw-instr/filling_in_from_a_list"; export default () => /*
*********** START MARKUP HERE: */
  <Page id="hueex1_l21_a02" title="Vocabulary" instrTitle={$loc('ahtmltitle', 'Fill in the sentences.')} instrBody={filling_in_from_a_list}>
  <GapFill caseSensitive={true} correctValue="ok" />
  <br />
  <GapFill caseSensitive={false} correctValue="ok" />
  <br />
  <br />
  <Offering id="of1" words="OK" mode='dropDownKeep' />
  <br />
  <DropDown caseSensitive={true} correctValue="ok" offeringId="of1" />
  <br />
  <br />
  <Offering id="of2" words="OK" mode='dropDownKeep' />
  <br />
  <DropDown id="dd1" caseSensitive={false} correctValue="ok" offeringId="of2" />
</Page>