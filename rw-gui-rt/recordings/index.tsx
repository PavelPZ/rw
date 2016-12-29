import React from 'react';
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon';
import Button from 'react-toolbox/lib/button/Button';
import IconButton from 'react-toolbox/lib/button/IconButton';
import classNames from "classnames";

import theme from "rw-gui-rt/theme";
import { onNotify, INotify, cancel, playRecording, startRecording, stopRecording, cancelPlaying, actNotifyData, RecordingStatus } from "rw-redux/recording";
import { playList } from "rw-redux/recordings";

interface IHomeState {
  size: number; //home size
}
let globSize = 0;
export class RecHome extends React.Component<{}, IHomeState> {
  constructor(p, c) {
    super(p, c);
    const self = this;
    self.state = {
      size: globSize,
    };
    //subscribe to recording notificaton. actNotifyData contains actual data.
    onNotify.value = () => self.modifyState();
  }
  modifyState(st?: IHomeState) {
    Object.assign(this.state, st);
    this.forceUpdate();
    globSize = this.state.size ? this.state.size : 0;
  }
  render(): JSX.Element {
    const self = this;
    const buttons = btnMetas.map(m => m[3](actNotifyData) ? <Button onClick={ev => m[2]()} key={m[0]} className='Mx(3px)' icon={m[1]} raised>{m[0]}</Button> : null);
    const sizeCls = self.state.size == 0 ? 'W(65px) H(65px)' : (self.state.size == 1 ? 'W(600px) H(90px)' : 'T(0px) End(0px');
    return <div className={classNames('Z(999) Pos(f) Start(0px) B(0px) D(f) Fld(c)', sizeCls, { 'Bgc(white) Bd Bdc(black)': self.state.size != 0 })}>
      {self.state.size != 2 ? <div className='Flxg(1)'></div> : <div className='Flxg(1) Bgc(yellow)'>
        xx
      </div>}
      <div className='Flxs(1)'>
        <div key='st' className={classNames({ 'D(n)': self.state.size == 0 || !actNotifyData.status })}>
          <b>{`${actNotifyData.title}:`}</b>
          {` ${RecordingStatus[actNotifyData.status]} `}
          {`${actNotifyData.actionIdx}/${actNotifyData.actionCount}-${actNotifyData.recordsIdx}/${actNotifyData.recordsCount}`}
        </div>
        <Button icon='open_with' floating accent mini onClick={ev => { ev.preventDefault(); self.modifyState({ size: (self.state.size + 1) % 3 }) }} key='max' />
        {self.state.size == 0 ? null : [
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

