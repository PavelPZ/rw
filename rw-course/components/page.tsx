import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { IMapDispatchToProps } from 'rw-redux';

//import * as DCourse from '../dom';
import { Tag } from './tag';
import { registerTag } from '../compiler';

//const pageSelector = createSelector<DRedux.IRootState, IParentMapStateToProps, Array<string>, IParentSubState>(
//  state => state.parent.childIds,
//  state => state.parent.root,
//  (childIds, par) => ({ textProp: par.text, childIds: childIds })
//);

//https://github.com/reactjs/reselect#accessing-react-props-in-selectors
//const getPageState = (state: DRedux.IRootState, props: dom.IPageProps) => state.courses[props.courseUrl].pageResult;


export class PagePresenter extends Tag<DCourse.IPageProps, never> {
  //constructor(props: objects.IPageProps, context: ICourseContext) { super(props, context); }
}

export const Page = connect<any, IMapDispatchToProps, DCourse.IPageProps>(
  (state: DRedux.IRootState, ownProps: DCourse.IPageProps) => { }
)(PagePresenter);
registerTag('Page', Page);

//interface Props {
//  xxxx: 'error' | 'warning';
//}

//const Bar = ({ xxxx = 'error' }: Props) => `This is my type: ${xxxx}`;

//function bBar({ xxxx = 'error' }: Props) { `This is my type: ${xxxx}`; }

//bBar({ xxxx: 'warning' });

//interface Props2 {
//  zzz: 'a' | 'b';
//  yyy: number;
//  ddd?: string;
//}
////const { zzz = 'zzz', yyy = 1 }: Props2 = {};

//function yyy({ zzz = 'zzz', yyy = 1 }: Props2) { `This is my type: ${zzz}, ${yyy.toString()}`; }

//yyy({ yyy: 1, zzz: 'a', ddd: '2' });
//yyy({ zzz: 'b', yyy: 1 });

//function yyyy(zzz = 'zzz', yyy = 1) { `This is my type: ${zzz}, ${yyy.toString()}`; }

//yyyy('s', 2);

//let res = { x: 3, y: 4, z: 4 };
//const { x = 1, y = 2, ...rest } = res;
//res = { x, y, ...rest };
