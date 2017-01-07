import React from 'react';

interface ICourseContextProps { }

export interface ICourseContext {
  course: CourseContext;
}

export class CourseContext extends React.Component<ICourseContextProps, never> {
  bodies: { [contextId: string]: BodyContext; } = {};
  static childContextTypes = { course: React.PropTypes.any };
  getChildContext() { return { course: this }; }
  render(): JSX.Element { return React.Children.only(this.props.children); }
}

export class BodyContext {
}