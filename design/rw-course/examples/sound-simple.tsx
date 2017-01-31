import React from 'react'; import course, {$rc, $loc, Page, DocExample, HeaderProp, DocDescr, MediaPlayer, MediaVideo, Pairing, PairingItem, MediaBigMark, Panel, SingleChoice, RadioButton, MediaText, CutText, Phrase, CutDialog, Replica, GapFill, WordSelection} from 'rw-course'; export default () => /*
*********** START MARKUP HERE: */
<Page title="Simple media" className="app-doc">
  <DocExample>
    <HeaderProp>
      <h3>Play sound</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <MediaPlayer mediaUrl="media/media3.mp3"></MediaPlayer>
  </DocExample>
  <DocExample>
    <HeaderProp>
      <h3>Play video</h3>
    </HeaderProp>
    <DocDescr>
      <p>Poznamka k video-format:{' '}<b>@std-4</b>{' '}znamena ze jsou k dispozici 2 formaty videa (.mp4 a .webm) ve dvou rozlisenich (pro malý a velký display). Detaily viz TODO</p>
    </DocDescr>
    <MediaVideo shareMediaId="player-1"></MediaVideo>
    <MediaPlayer id="player-1" mediaUrl="media/video@std-4"></MediaPlayer>
  </DocExample>
  <DocExample>
    <HeaderProp>
      <h3>Sound in exercises</h3>
    </HeaderProp>
    <DocDescr>
      <p>TODO: 3 kratke zvuky, lepsi cviceni</p>
    </DocDescr>
    <h4>... in pairing</h4>
    <Pairing>
      <PairingItem right="text 1">
        <MediaBigMark mediaUrl="media/media3.mp3"></MediaBigMark>
      </PairingItem>
      <PairingItem right="text 2">
        <MediaBigMark mediaUrl="media/media3.mp3"></MediaBigMark>
      </PairingItem>
    </Pairing>
    <h4>... in single-choice</h4>
    <Panel>
      <HeaderProp>
        <MediaPlayer mediaUrl="media/media3.mp3"></MediaPlayer>
      </HeaderProp>
      <SingleChoice id="sch1">
        <RadioButton>possibility 1</RadioButton>
        <RadioButton correctValue={true}>possibility 2</RadioButton>
        <RadioButton>possibility 3</RadioButton>
      </SingleChoice>
    </Panel>
  </DocExample>
  <DocExample>
    <HeaderProp>
      <h3>Sound with text</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <MediaText>
      <CutText mediaUrl="media/media3.mp3">
        <Phrase begPos={6050} endPos={6761}>Hello, Thomas.</Phrase>
        <Phrase begPos={6761} endPos={7829}>How are you?</Phrase>
      </CutText>
    </MediaText>
  </DocExample>
  <DocExample>
    <HeaderProp>
      <h3>Sound with dialog</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <MediaText>
      <CutDialog mediaUrl="media/media3.mp3">
        <Replica actorName="Fiona">
          <Phrase begPos={6050} endPos={6761}>Hello, Thomas.</Phrase>
          <Phrase begPos={6761} endPos={7829}>How are you?</Phrase>
        </Replica>
        <Replica actorName="Thomas">
          <Phrase begPos={7855} endPos={9252}>Fine, thanks.</Phrase>
          <Phrase begPos={9252} endPos={10697}>And you Fiona?</Phrase>
        </Replica>
      </CutDialog>
    </MediaText>
  </DocExample>
  <DocExample>
    <HeaderProp>
      <h3>Sound text and player</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <MediaPlayer shareMediaId="play-text-id"></MediaPlayer>
    <MediaText id="play-text-id">
      <CutText mediaUrl="media/media3.mp3">
        <Phrase begPos={6050} endPos={6761}>Hello, Thomas.</Phrase>
        <Phrase begPos={6761} endPos={7829}>How are you?</Phrase>
        <Phrase begPos={7855} endPos={9252}>Fine, thanks.</Phrase>
        <Phrase begPos={9252} endPos={10697}>And you Fiona?</Phrase>
      </CutText>
    </MediaText>
  </DocExample>--&gt;<DocExample><HeaderProp><h3>Activity inside sound text</h3></HeaderProp><DocDescr></DocDescr><MediaText><CutText mediaUrl="media/media3.mp3"><Phrase begPos={6050} endPos={6761}><GapFill correctValue="Hello"></GapFill>, Thomas.</Phrase><Phrase begPos={6761} endPos={7829}><WordSelection words="#How|What|Who" />{' '}are you?</Phrase><Phrase begPos={7855} endPos={9252}>Fine, thanks.</Phrase><Phrase begPos={9252} endPos={10697}>And you Fiona?</Phrase></CutText></MediaText></DocExample><DocExample><HeaderProp><h3>Video dialog with activities</h3></HeaderProp><DocDescr><p></p></DocDescr><div className="row"><div className="col-sm-7"><MediaVideo shareMediaId="video-dialog"></MediaVideo><MediaPlayer shareMediaId="video-dialog"></MediaPlayer></div><div className="col-sm-5"><MediaText id="video-dialog"><CutDialog mediaUrl="media/video@std-4"><Replica actorName="Herr Haschek"><Phrase begPos={1870} endPos={4350}>Sportgeräte, Haschek.{' '}<WordSelection words="#Was|Was|Wir" />{' '}kann ich für Sie tun?</Phrase></Replica><Replica actorName="Herr Schmid"><Phrase begPos={4350} endPos={7260}>Hier Eishockey-Großhandel, Schmidt am Apparat.</Phrase><Phrase begPos={7260} endPos={11140}>Ich{' '}<GapFill correctValue="habe"></GapFill>{' '}habe mir Ihre Internetseite angesehen und festgestellt, dass Sie Eishockeyartikel herstellen.</Phrase><Phrase begPos={11140} endPos={14980}>Wir suchen einen Lieferanten für Eishockeyschläger und da dachte ich …</Phrase></Replica></CutDialog></MediaText></div></div></DocExample></Page>