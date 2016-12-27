import React from 'react';
import isArray from 'lodash/isArray';

import { lazyModuleHandler } from 'rw-lib/lazy-loader';

export class compileHandler extends lazyModuleHandler {
  exercise: JSX.Element;
  onLoaded() { this.exercise = preCompile(this.module.getMarkup); }
}

export function preCompile(getJSXTree: () => IElement): JSX.Element {
  //replace JSX.Elements tree by IElement tree
  let oldCreate = React.createElement;
  let jsxTree: IElement;
  try {
    React.createElement = (type, props, ...childs: Array<IElement>) => ({ type: type, props: props, childs: childs } as any);
    jsxTree = getJSXTree();
  } finally {
    React.createElement = oldCreate;
  }
  //modify IElement tree
  jsxTree = compile(jsxTree);
  //replace IElement tree by JSX.Elements tree
  const elToJsx = (el: IElement | string) => {
    if (typeof el === 'string') return el;
    return React.createElement(el.type, el.props, el.childs ? el.childs.map(e => elToJsx(e)) : null);
  };
  return elToJsx(jsxTree);
}

interface IElement {
  type;
  props;
  childs: Array<IElement>;
}

//TODO exercise precompilation
function compile(root: IElement): IElement {
  return root;
}