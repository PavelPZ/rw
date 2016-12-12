import React from 'react';

import Overlay from "react-toolbox/lib/overlay/Overlay";

import { blockGui, TBlockGuiPresent } from '../../rw-redux/block-gui';

const BlockGuiPresent: TBlockGuiPresent = props => {
  console.log('render BlockGui');
  if (props.counterProp <= 0) return null;
  return <Overlay active={true}><h1>loading...</h1></Overlay>
};

const BlockGui = blockGui(BlockGuiPresent);
export default BlockGui; 
