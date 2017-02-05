import React from 'react';
import { Overlay } from "react-toolbox/lib/overlay/Overlay";

import theme from "rw-gui-rt/theme";
import { blockGuiCreator, TBlockGuiPresent, blockGuiProxy } from 'rw-redux';

const BlockGuiPresent: TBlockGuiPresent = props => {
  console.log('render BlockGui');
  return !props.show ? null : <Overlay active={true} theme={{ backdrop: theme.RTOverlay.overlay + ' Bg(t)' }}><h1>loading...</h1></Overlay>
};

const BlockGui = blockGuiCreator(BlockGuiPresent);
const init = () => blockGuiProxy.value = () => <BlockGui />;
export default init;