import React from 'react'; import course, {$rc, $loc, Page, DocExample, HeaderProp, DocDescr, MediaPlayer, MediaVideo, MediaText, IncludeDialog, PhraseReplace, GapFill, CutDialog, Replica, Phrase, WordSelection, CutText, IncludeText} from 'rw-course'; export default () => /*
*********** START MARKUP HERE: */
<Page title="Single Choice" className="app-doc">
  <DocExample>
    <HeaderProp>
      <h3>Nenastrihany zvuk - odkaz na MP3 soubor</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <MediaPlayer mediaUrl="media/media1.mp3"></MediaPlayer>
  </DocExample>
  <DocExample>
    <HeaderProp>
      <h3>Nenastrihane video</h3>
    </HeaderProp>
    <DocDescr>Misto extenze je definice formatu (@std-4 znamena 2 ruzna rozliseni pro 2 extenze (webm a mp4))</DocDescr>
    <div className="row">
      <div className="col-sm-6">
        <MediaVideo id="vid0" mediaUrl="media/video@std-4"></MediaVideo>
      </div>
      <div className="col-sm-6">
        <MediaPlayer shareMediaId="vid0"></MediaPlayer>
      </div>
    </div>
  </DocExample>
  <DocExample>
    <HeaderProp>
      <h3>Nastrihany zvuk - odkaz na nastrihani zvuku</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <MediaText id="text1" subset="0-3" cutUrl="media/media1"></MediaText>
    <MediaPlayer shareMediaId="text1"></MediaPlayer>
  </DocExample>
  <DocExample>
    <HeaderProp>
      <h3>Nastrihane video. Navic s nahradou jedne vety</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <div className="row">
      <div className="col-sm-6">
        <MediaVideo shareMediaId="vid1"></MediaVideo>
      </div>
      <div className="col-sm-6">
        <MediaText id="vid1" subset="1-2">
          <IncludeDialog cutUrl="media/video">
            <PhraseReplace replicaPhraseIdx="0.0">Text{' '}<GapFill correctValue="ok" />{' '}text.</PhraseReplace>
          </IncludeDialog>
        </MediaText>
      </div>
    </div>
  </DocExample>
  <DocExample>
    <HeaderProp>
      <h3>Definice dialogu primo ve cviceni.</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <div className="row">
      <div className="col-sm-6">
        <MediaVideo shareMediaId="video-dialog"></MediaVideo>
      </div>
      <div className="col-sm-6">
        <MediaText id="video-dialog">
          <CutDialog mediaUrl="media/video@std-4">
            <Replica actorName="Herr Haschek">
              <Phrase begPos={1870} endPos={4350}>Sportgeräte, Haschek.{' '}<WordSelection words="#Was|Was|Wir" />{' '}kann ich für Sie tun?</Phrase>
            </Replica>
            <Replica actorName="Herr Schmid">
              <Phrase begPos={4350} endPos={7260}>Hier Eishockey-Großhandel, Schmidt am Apparat.</Phrase>
              <Phrase begPos={7260} endPos={11140}>Ich{' '}<GapFill correctValue="habe"></GapFill>{' '}habe mir Ihre Internetseite angesehen und festgestellt, dass Sie Eishockeyartikel herstellen.</Phrase>
              <Phrase begPos={11140} endPos={14980}>Wir suchen einen Lieferanten für Eishockeyschläger und da dachte ich …</Phrase>
            </Replica>
          </CutDialog>
        </MediaText>
      </div>
    </div>
  </DocExample>
  <DocExample>
    <HeaderProp>
      <h3>Z nastrihaneho dialogu udelej text a navic v nem nahrad jednu vetu</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <MediaText subset="0-3">
      <CutText>
        <IncludeDialog cutUrl="media/media3">
          <PhraseReplace replicaPhraseIdx="0.0">Text{' '}<WordSelection words="wrong|#ok|wrong2" />{' '}text.</PhraseReplace>
        </IncludeDialog>
      </CutText>
    </MediaText>
  </DocExample>
  <DocExample>
    <HeaderProp>
      <h3>Z nastrihaneho textu udelej dialog a navic v nem nahrad jednu vetu</h3>
    </HeaderProp>
    <DocDescr></DocDescr>
    <MediaText subset="0">
      <CutDialog>
        <IncludeText cutUrl="media/media1">
          <PhraseReplace phraseIdx={1}>Text{' '}<WordSelection words="wrong|#ok|wrong2" />{' '}text.</PhraseReplace>
        </IncludeText>
        <Replica actorName="actor 1" numberOfPhrases={2}></Replica>
      </CutDialog>
    </MediaText>
  </DocExample>
</Page>