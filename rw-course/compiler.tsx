import React from 'react';
import isArray from 'lodash/isArray';

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

export const registerTag = (type: typeof React.Component) => {
  const nm = type.name; if (types[nm]) throw new Error(`Tag ${name} already registered`);
  types[nm] = type;
}
export const fingTag = (name: string) => {
  const res = types[name]; if (!res) return name; //throw new Error(`Cannot find tag ${name}`);
  return res;
};

const types: { [name: string]: typeof React.Component; } = {};