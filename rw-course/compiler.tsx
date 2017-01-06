import React from 'react';
import isArray from 'lodash/isArray';

import { fingTag } from './interfaces';
import { lazyModuleHandler } from 'rw-lib/lazy-loader';

export class compileHandler extends lazyModuleHandler {
  exercise: JSX.Element;
  onLoaded() { this.exercise = preCompile(this.module.default); }
}

export function preCompile(getJSXTree: () => IElement | JSX.Element): JSX.Element {
  //replace JSX.Elements tree by IElement tree
  let oldCreate = React.createElement;
  let jsxTree: IElement;
  try {
    React.createElement = (type, props, ...childs: Array<IElement>) => {
      return ({ type: typeof type === 'string' ? type : type.name, props: props, childs: childs } as any)
    };
    jsxTree = getJSXTree() as IElement;
  } finally {
    React.createElement = oldCreate;
  }
  //modify IElement tree
  jsxTree = compile(jsxTree);
  //replace IElement tree by JSX.Elements tree
  const elToJsx = (el: IElement | string) => {
    if (typeof el === 'string') return el;
    return React.createElement(fingTag(el.type) as any, el.props, el.childs && el.childs.length>0 ? el.childs.map(e => elToJsx(e)) : null);
  };
  //return <pre><code>{JSON.stringify(jsxTree, null, 2)}</code></pre>;
  return elToJsx(jsxTree);
}

interface IElement {
  type:string;
  props;
  childs: Array<IElement>;
}

//TODO exercise precompilation
function compile(root: IElement): IElement {
  return root;
}