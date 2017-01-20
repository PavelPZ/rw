import React from 'react';
import isArray from 'lodash/isArray';
import * as dom from './dom';

//import { lazyModuleHandler } from 'rw-lib/lazy-loader';

//export class compileHandler extends lazyModuleHandler {
//  constructor(id: string, public ctx?: dom.ICourseContext) { super(id); }
//  exercise: JSX.Element;
//  onLoaded() {
//    //const json = this.module.default ? preCompile(this.module.default)
//    this.exercise = afterCompile(preCompile(this.module.default), this.ctx);
//  }
//}

export type TGetPage = () => JSX.Element;

const typeId = '$tid';

export function preCompile(getJSXTree: () => IElement | JSX.Element): IElement {
  //replace JSX.Elements tree by IElement tree
  let oldCreate = React.createElement;
  let jsxTree: IElement;
  try {
    React.createElement = (type, props, ...childs: Array<IElement>) => {
      return ({ type: typeof type === 'string' ? type : type[typeId], props: props, childs: childs } as any)
    };
    jsxTree = getJSXTree() as IElement;
  } finally {
    React.createElement = oldCreate;
  }
  //const debugBefore = JSON.stringify(jsxTree, null, 2);
  //debugger;
  //modify IElement tree
  return compile(jsxTree);
}
export function afterCompile(comp: IElement/*, ctx?: dom.ICourseContext*/): JSX.Element {
  //Object.assign(comp, ctx); //extend root (IPageProps) by context
  //replace IElement tree by JSX.Elements tree
  const elToJsx = (el: IElement | string) => {
    if (typeof el === 'string') return el;
    return React.createElement(fingTag(el.type) as any, el.props, el.childs && el.childs.length > 0 ? el.childs.map(e => elToJsx(e)) : null);
  };
  //return <pre><code>{JSON.stringify(jsxTree, null, 2)}</code></pre>;
  return elToJsx(comp);
}

export interface IElement {
  type:string;
  props;
  childs: Array<IElement>;
}

//TODO exercise precompilation
function compile(root: IElement): IElement {
  return root;
}

export const registerTag = (name: string, type: typeof React.Component | React.StatelessComponent<any>) => {
  if (types[name]) throw new Error(`Tag ${name} already registered`);
  type[typeId] = name;
  types[name] = type;
}
export const fingTag = (name: string) => {
  const res = types[name]; if (!res) return name; //throw new Error(`Cannot find tag ${name}`);
  return res;
};

const types: { [name: string]: typeof React.Component | React.StatelessComponent<any>; } = {};