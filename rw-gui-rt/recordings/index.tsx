import React from 'react';
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon';
import Button from 'react-toolbox/lib/button/Button';
import IconButton from 'react-toolbox/lib/button/IconButton';
import classNames from "classnames";

import theme from "rw-gui-rt/theme";
import { onNotify, INotify, cancel, playRecording, startRecording, stopRecording, cancelPlaying, notifyData, RecordingStatus } from "rw-redux/recording";
import { playList } from "rw-redux/recordings";

interface IHomeState {
  size?: number; //home size
  modifyState?: (st: IHomeState, ev: React.SyntheticEvent<any>) => void; //modify root state
  recState?: INotify; //rec x play notifications
}
let globSize = 0;
export class RecHome extends React.Component<{}, IHomeState> {
  constructor(p, c) {
    super(p, c);
    const self = this;
    self.state = {
      modifyState: (st: IHomeState, ev: React.SyntheticEvent<any>) => {
        if (ev) ev.preventDefault();
        Object.assign(self.state, st);
        self.forceUpdate();
        globSize = st.size ? st.size : 0;
      },
      recState: notifyData,
      size: globSize,
    };
    onNotify.value = data => self.state.modifyState({ ...self.state, recState: data }, null);
  }
  render(): JSX.Element {
    const state = this.state;
    const buttons = btnMetas.map(m => m[3](state.recState) ? <Button onClick={ev => m[2]()} key={m[0]} className='Mx(3px)' icon={m[1]} raised>{m[0]}</Button> : null);
    const sizeCls = this.state.size == 0 ? 'W(65px) H(65px)' : (this.state.size == 1 ? 'W(600px) H(90px)' : 'T(0px) End(0px');
    return <div className={classNames('Z(999) Pos(f) Start(0px) B(0px) D(f) Fld(c)', sizeCls, { 'Bgc(white) Bd Bdc(black)': this.state.size != 0 })}>
      {this.state.size != 2 ? <div className='Flxg(1)'></div> : <div className='Flxg(1) Bgc(yellow)'>
        xx
      </div>}
      <div className='Flxs(1)'>
        <div key='st' className={classNames({ 'D(n)': this.state.size == 0 || !state.recState.status })}>
          <b>{`${state.recState.title}:`}</b>
          {` ${RecordingStatus[state.recState.status]} `}
          {`${state.recState.actionIdx}/${state.recState.actionCount}-${state.recState.recordsIdx}/${state.recState.recordsCount}`}
        </div>
        <Button icon='open_with' floating accent mini onClick={ev => state.modifyState({ size: (state.size + 1) % 3 }, ev)} key='max' />
        {this.state.size == 0 ? null : [
          buttons,
          <br />,
        ]}
      </div>
    </div>
  }
}

const btnMetas: Array<[string, string, () => void, (nd: INotify) => boolean]> = [
  ['Play', 'play_circle_filled', playRecording, nd => !nd.playList && inStatus(nd.status, [RecordingStatus.recorded])],
  ['Record', 'fiber_manual_record', startRecording, nd => !nd.playList && inStatus(nd.status, [RecordingStatus.recorded, RecordingStatus.no])],
  //['Stop', 'stop', cancel, nd => inStatus(nd.status, [RecordingStatus.playing])],
  ['Finish rec', 'stop', stopRecording, nd => inStatus(nd.status, [RecordingStatus.recording])],
  ['Stop play', 'stop', cancelPlaying, nd => inStatus(nd.status, [RecordingStatus.playing])],
  ['Play list', 'play_circle_outline', playList, nd => true],
];
const inStatus = (st: RecordingStatus, arr: Array<RecordingStatus>) => { if (!st) st = RecordingStatus.no; return arr.indexOf(st) >= 0; };

