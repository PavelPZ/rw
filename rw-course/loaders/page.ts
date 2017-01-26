import * as React from 'react';
import { afterCompile, preCompile } from 'rw-course';

//https://www.codeschool.com/blog/2015/12/11/es2015-a-systemjs-odyssey/
//https://github.com/systemjs/systemjs/issues/982
//https://juristr.com/apps/ng2beta/node_modules/systemjs/node_modules/es6-module-loader/docs/loader-extensions/
export interface IPageLoaderProps  {
  //page: TGetPage; //budto URL se cvicenim nebo funkce, vracejici kod stranky
}

export class PageLoader extends React.Component<IPageLoaderProps, any> {
  render(): JSX.Element {
    return null; //this.props.page ? afterCompile(preCompile(this.props.page)) : null;
  }
}