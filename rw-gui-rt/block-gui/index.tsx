import React from 'react';

import { blockGui, TBlockGuiPresent } from '../../rw-redux/block-gui';

const BlockGuiPresent: TBlockGuiPresent = props => {
  console.log('render BlockGui');
  return props.counterProp > 0 ? <h3 style={{ color: 'red' }}>Loading...</h3> : null;
};

const BlockGui = blockGui(BlockGuiPresent);
export default BlockGui; 
