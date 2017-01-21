import React from 'react'; import course, {$rc, $loc, Page, Offering, GapFill, DropDown} from 'rw-course'; export default () => /*
*********** START MARKUP HERE: */
<Page title="Vocabulary">
  <Offering id="of1" />
  <br />
  <GapFill correctValue="ok4" offeringId="of1" evalGroup="g1" evalExchangeable={true} />
  <GapFill correctValue="ok3" offeringId="of1" evalGroup="g1" evalExchangeable={true} />
  <GapFill correctValue="ok2" offeringId="of1" evalGroup="g2" evalExchangeable={true} />
  <GapFill correctValue="ok1" offeringId="of1" evalGroup="g2" evalExchangeable={true} />
  <br />
  <GapFill correctValue="ok5" evalGroup="g1" evalExchangeable={true} />
  <br />
  <br />
  <Offering id="of2" mode={course.TOfferingDropDownMode.dropDownDiscard} />
  <br />
  <DropDown correctValue="ok1" offeringId="of2" evalGroup="g3" evalExchangeable={true} />
  <DropDown correctValue="ok2" offeringId="of2" evalGroup="g3" evalExchangeable={true} />
  <DropDown correctValue="ok3" offeringId="of2" evalGroup="g4" evalExchangeable={true} />
  <DropDown correctValue="ok4" offeringId="of2" evalGroup="g4" evalExchangeable={true} />
  <br />
  <br />
  <br />
  <br />
</Page>