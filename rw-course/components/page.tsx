import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { IMapDispatchToProps, IRootState } from 'rw-redux';

import * as dom from '../dom';
import { Tag } from './tag';
import { registerTag } from '../compiler';

//export interface IPageState extends objects.ITagState {}

//const pageSelector = createSelector<IRootState, IParentMapStateToProps, Array<string>, IParentSubState>(
//  state => state.parent.childIds,
//  state => state.parent.root,
//  (childIds, par) => ({ textProp: par.text, childIds: childIds })
//);

//http://stackoverflow.com/questions/36392048/how-can-i-get-ownprops-using-reselect-on-redux
const getPageState = (state: IRootState, props: dom.IPageProps) => state.courses[props.courseUrl].pageResult;


export class PagePresenter extends Tag<dom.IPageProps, never> {
  //constructor(props: objects.IPageProps, context: ICourseContext) { super(props, context); }
}

export const Page = connect<any, IMapDispatchToProps, dom.IPageProps>(
  (state: IRootState, ownProps: dom.IPageProps) => { }
)(PagePresenter);
registerTag('Page', Page);
