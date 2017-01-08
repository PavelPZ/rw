import React from 'react'; import course, {$rc, $loc, CutDialog, Replica, Phrase} from 'rw-course'; export default () => /*
*********** START MARKUP HERE: */
<CutDialog>
  <Replica actorName="A">
    <Phrase begPos={6050} endPos={6761}>
      Hello, Thomas.
    </Phrase>
    <Phrase begPos={6761} endPos={7829}>
      How are you?
    </Phrase>
  </Replica>
  <Replica actorName="B">
    <Phrase begPos={7855} endPos={9252}>
      Fine, thanks.
    </Phrase>
    <Phrase begPos={9252} endPos={10697}>
      And you Fiona?
    </Phrase>
  </Replica>
  <Replica actorName="A">
    <Phrase begPos={10697} endPos={12148}>
      Fine, thanks.
    </Phrase>
  </Replica>
  <Replica actorName="B">
    <Phrase begPos={12296} endPos={14406}>
      Fiona, this is Nicole.
    </Phrase>
    <Phrase begPos={14406} endPos={16653}>
      Nicole, this is Fiona.
    </Phrase>
  </Replica>
  <Replica actorName="A">
    <Phrase begPos={16653} endPos={18928}>
      Nice to meet you, Nicole.
    </Phrase>
  </Replica>
  <Replica actorName="C">
    <Phrase begPos={18928} endPos={20670}>
      Nice to meet you, too.
    </Phrase>
  </Replica>
</CutDialog>