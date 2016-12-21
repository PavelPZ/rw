import React from 'react';
import Overlay from "react-toolbox/lib/overlay/Overlay";

import theme from "rw-gui-rt/theme";
import { blockGuiCreator, TBlockGuiPresent, blockGuiProxy } from 'rw-redux/block-gui';

const BlockGuiPresent: TBlockGuiPresent = props => {
  console.log('render BlockGui');
  if (props.counterProp <= 0) return null;
  return <Overlay active={true} theme={{ backdrop: theme.RTOverlay.backdrop + ' Bg(t)' }}><h1>loading...</h1></Overlay>
};

const BlockGui = blockGuiCreator(BlockGuiPresent);
const init = () => blockGuiProxy.value = () => <BlockGui />;
export default init;