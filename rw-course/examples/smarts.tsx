import React from 'react'; import course, { $rc, $loc, Page, SmartElement, SmartPairing, SmartOffering } from 'rw-course'; export default () => /*
*********** START MARKUP HERE: */
  <Page title="Smarts">
    <h2>Smarts</h2>
    <SmartElement inlineType='GapFill' cdata={`
She {+ eats} a cake.
        
He {+ drinks|is drinking} coffee.
`} />
    <hr />
    <SmartElement childProps={{ GapFill: { widthGroup: 's1' } }} cdata={`
{#table 
@col1: She {+gap-fill eats} a cake.
@col2: {+word-selection w1|w2|#w3}
-------------
@col1: Passive **cell**
@col2: He {+gap-fill +drinks|is drinking} coffee.
table#}
`} />
    <h2>Pairing</h2>
    <SmartPairing cdata={`
left 1||right 1
left 2||right 2
{+img media/04.png}||right3
`} />
    <h2>Offering</h2>
    <div>
      <SmartOffering mode='GapFill' words="eat|dring" cdata={`
She {+ eats} a cake.
        
He {+ drinks|is drinking} coffee.
`} />
    </div>
    <hr />
    <div>
      <SmartOffering mode='GapFillPassive' words="eat|dring" cdata={`
She {+ eats} a cake.
        
He {+ drinks|is drinking} coffee.
`} />
    </div>
    <hr />
    <div>
      <SmartOffering mode='DropDownDiscard' cdata={`
She {+ eats} a cake.
        
He {+ drinks} coffee.
`} />
    </div>
    <hr />
    <div>
      <SmartOffering mode='DropDownKeep' words="eat|dring" cdata={`
She {+ eats} a cake.
        
He {+ drinks} coffee.
`} />
    </div>
    <hr />
    <div>
      <SmartOffering mode='DropDownKeep' words="eat|dring" cdata={`
`} />
    </div>
  </Page>