import React from 'react'; import course, {$rc, $loc, Page, Offering, GapFill, DropDown} from 'rw-course'; export default () => /*
*********** START MARKUP HERE: */
<Page title="Vocabulary">
  <Offering id="of1" />
  <br />
  <GapFill correctValue="ok4" offeringId="of1" evalGroup="g1-exchangeable" />
  <GapFill correctValue="ok3" offeringId="of1" evalGroup="g1-exchangeable" />
  <GapFill correctValue="ok2" offeringId="of1" evalGroup="g2-exchangeable" />
  <GapFill correctValue="ok1" offeringId="of1" evalGroup="g2-exchangeable" />
  <br />
  <GapFill correctValue="ok5" evalGroup="g1-exchangeable" />
  <br />
  <br />
  <Offering id="of2" mode={course.offeringDropDownMode.dropDownDiscard} />
  <br />
  <DropDown correctValue="ok1" offeringId="of2" evalGroup="g3-exchangeable" />
  <DropDown correctValue="ok2" offeringId="of2" evalGroup="g3-exchangeable" />
  <DropDown correctValue="ok3" offeringId="of2" evalGroup="g4-exchangeable" />
  <DropDown correctValue="ok4" offeringId="of2" evalGroup="g4-exchangeable" />
  <br />
  <br />
  <br />
  <br />
</Page>