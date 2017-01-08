import React from 'react'; import course, {$rc, $loc, Page, Extension, MediaBigMark, Recording} from 'rw-course'; export default () => /*
*********** START MARKUP HERE: */
<Page title="Speaking part">
  <Extension data="chinh-speaking" cdata={`
data      
    `} />
  <div id="chinh-speaking-dialog" className="modal fade">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-body">
          <div id="instruction1">
            <div className="alert alert-warning">
              <p>Poslechnete si otazku. Po jejim prehrani zazni gong. Po zazneni gongu zacnete ihned nahravat Vasi odpoved do mikrofonu.</p>
              <div data-bind="click: Course.extension.instructionOK" className="btn btn-warning">OK, rozumim.</div>
            </div>
          </div>
          <div id="instruction2">
            <div className="alert alert-warning">
              <p>Prectete si otazku. Po jedne minute na rozmysleni zazni gong. Po zazneni gongu zacnete ihned nahravat Vasi odpoved do mikrofonu.</p>
              <div data-bind="click: Course.extension.instructionOK" className="btn btn-warning">OK, rozumim.</div>
            </div>
          </div>
          <div id="playing-question" className="info">
            <h3>playing question...</h3>
          </div>
          <div id="recording" className="info">
            <h3>recording...</h3>
          </div>
          <div id="saving-recording" className="info">
            <h3>saving your recording...</h3>
          </div>
          <div id="thinking" className="info">
            <h3>one minute for thinking (<span data-bind="text:Course.extension.remaining"></span>{' '}seconds remaining)...</h3>
          </div>
          <div className="show">
            <MediaBigMark id="gong" mediaUrl="/lm/examples/moe_test/Speaking/Speaking/media/gong.mp3"></MediaBigMark>
          </div>
          <div id="part1-question1">
            <MediaBigMark id="p1-q1" mediaUrl="/lm/examples/moe_test/Speaking/Speaking/media/part1_question1.mp3"></MediaBigMark>
            <Recording id="p1-a1" limitMax={6}></Recording>
          </div>
          <div id="part1-question2">
            <MediaBigMark id="p1-q2" mediaUrl="/lm/examples/moe_test/Speaking/Speaking/media/part1_question2.mp3"></MediaBigMark>
            <Recording id="p1-a2" limitMax={6}></Recording>
          </div>
          <div id="part1-question3">
            <MediaBigMark id="p1-q3" mediaUrl="/lm/examples/moe_test/Speaking/Speaking/media/part1_question3.mp3"></MediaBigMark>
            <Recording id="p1-a3" limitMax={6}></Recording>
          </div>
          <hr />
          <div id="part2-question">
            <div id="p2-q1">
              <div id="part2" className="panel panel-info">
                <div className="panel-heading">
                  <p>Read a situation with three possible solutions below. Choose which of the three solutions is the best and discuss why it is the better than the others. You have 1 minute to prepare and a maximum of 2 minutes to respond.</p>
                </div>
                <div className="panel-body">
                  <p>You got on the bus to school. A moment later, the bus attendant asks for your bus pass. In that moment, you realized that you had forgotten your bus pass and you don’t have any cash with you. What would you do?</p>
                  <ul>
                    <li>ask money from a stranger</li>
                    <li>get off the bus, go home, and be late for school</li>
                    <li>ask the bus driver politely if you can pay tomorrow</li>
                  </ul>
                </div>
              </div>
            </div>
            <Recording id="p2-a1" limitMax={12} />
          </div>
          <hr />
          <div id="part3-question1">
            <div id="p3-q1">
              <div id="part3" className="panel panel-info">
                <div className="panel-heading">
                  <p>Make a response to the topic below and develop your ideas using the clues provided. Then answer some questions related to the topic.</p>
                </div>
                <div className="panel-body">
                  <p>Describe a possession you couldn’t live without. You should say:</p>
                  <ul>
                    <li>what you use it for</li>
                    <li>why it is important to you</li>
                    <li>where you got it from</li>
                  </ul>
                </div>
              </div>
            </div>
            <Recording id="p3-a1" limitMax={120}></Recording>
          </div>
          <hr />
          <div id="part3-question2">
            <MediaBigMark id="p3-q2" mediaUrl="/lm/examples/moe_test/Speaking/Speaking/media/part3_question2.mp3"></MediaBigMark>
            <Recording id="p3-a2" limitMax={60}></Recording>
          </div>
          <div id="part3-question3">
            <MediaBigMark id="p3-q3" mediaUrl="/lm/examples/moe_test/Speaking/Speaking/media/part3_question3.mp3"></MediaBigMark>
            <Recording id="p3-a3" limitMax={60}></Recording>
          </div>
          <div id="part3-question4">
            <MediaBigMark id="p3-q4" mediaUrl="/lm/examples/moe_test/Speaking/Speaking/media/part3_question4.mp3"></MediaBigMark>
            <Recording id="p3-a4" limitMax={60}></Recording>
          </div>
        </div>
        <div className="modal-footer">
          <div id="progress-panel" className="show">
            <span data-bind="css: {'label-default': Course.extension.actIdx()&lt;0, 'label-success': Course.extension.actIdx()&gt;0, 'label-warning': Course.extension.actIdx()==0}" className="label">1</span>
            <span data-bind="css: {'label-default': Course.extension.actIdx()&lt;1, 'label-success': Course.extension.actIdx()&gt;1, 'label-warning': Course.extension.actIdx()==1}" className="label">2</span>
            <span data-bind="css: {'label-default': Course.extension.actIdx()&lt;2, 'label-success': Course.extension.actIdx()&gt;2, 'label-warning': Course.extension.actIdx()==2}" className="label">3</span>
            <span data-bind="css: {'label-default': Course.extension.actIdx()&lt;3, 'label-success': Course.extension.actIdx()&gt;3, 'label-warning': Course.extension.actIdx()==3}" className="label">4</span>
            <span data-bind="css: {'label-default': Course.extension.actIdx()&lt;4, 'label-success': Course.extension.actIdx()&gt;4, 'label-warning': Course.extension.actIdx()==4}" className="label">5</span>
            <span data-bind="css: {'label-default': Course.extension.actIdx()&lt;5, 'label-success': Course.extension.actIdx()&gt;5, 'label-warning': Course.extension.actIdx()==5}" className="label">6</span>
            <span data-bind="css: {'label-default': Course.extension.actIdx()&lt;6, 'label-success': Course.extension.actIdx()&gt;6, 'label-warning': Course.extension.actIdx()==6}" className="label">7</span>
            <span data-bind="css: {'label-default': Course.extension.actIdx()&lt;7, 'label-success': Course.extension.actIdx()&gt;7, 'label-warning': Course.extension.actIdx()==7}" className="label">8</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</Page>