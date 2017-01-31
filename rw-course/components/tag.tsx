import * as React from 'react';
//import * as DCourse from '../dom';
//import * as context from '../context';

export class Tag<P extends DCourse.ITagProps, S extends DCourse.ITagState> extends React.Component<P, S> {
  render(): JSX.Element {
    switch (React.Children.count(this.props.children)) {
      case 0: return null;
      default: return <span>{this.props.children}</span>;
    }
  }
}

