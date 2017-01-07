import * as React from 'react';
import * as objects from '../dom';
import { Tag } from './tag';
import { registerTag } from '../compiler';

export interface IBodyState extends objects.ITagState {
}

export class Body extends Tag<objects.IBodyProps, IBodyState> {
  constructor(props: objects.IBodyProps, context: any) { super(props, context); }
}
registerTag(Body);
