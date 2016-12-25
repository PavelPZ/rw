import React from 'react';
import isArray from 'lodash/isArray';

import { lazyModuleHandler } from 'rw-lib/lazy-loader';

interface IElement {
  type;
  props;
  childs: Array<IElement>;
}

export class handler extends lazyModuleHandler {
  exercise: JSX.Element;
  onLoaded() {
    let oldCreate = React.createElement;
    let root: IElement;
    try {
      React.createElement = (type, props, ...childs: Array<IElement>) => {
        return ({ type: type, props: props, childs: childs } as any);
      };
      root = this.module.getMarkup();
    } finally {
      React.createElement = oldCreate;
    }
    root = compile(root);
    const elToJsx = (el: IElement | string) => {
      if (typeof el === 'string') return el;
      return React.createElement(el.type, el.props, el.childs ? el.childs.map(e => elToJsx(e)) : null);
    };
    this.exercise = elToJsx(root);
  }
}

//TODO exercise precompilation
function compile(root: IElement): IElement {
  return root;
}