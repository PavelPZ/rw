import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { IMapDispatchToProps } from 'rw-redux';

import { ICourseContext } from '../context';
import * as objects from '../dom';
import { Tag } from './tag';
import { registerTag } from '../compiler';

//export interface IPageState extends objects.ITagState {}

export class PagePresenter extends Tag<objects.IPageProps, never> {
  //constructor(props: objects.IPageProps, context: ICourseContext) { super(props, context); }
}

export const Page = connect<any, IMapDispatchToProps, objects.IPageProps>(
  (state: {}) => { }
)(PagePresenter);
registerTag('Page', Page);
