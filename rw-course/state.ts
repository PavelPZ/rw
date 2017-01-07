import { IConfig, config } from 'config';
import { IRootState } from 'rw-redux';
import * as objects from './dom';

declare module 'rw-redux/types' {
  interface IRootState {
    courses?: {
      [contextId: string]: ICourseState;
    }
  }
}

export interface ICourseState {
  actPage: { pageUrl: string; [tagId: string]: {} };
  proxies: { [pageUrl: string]: objects.pageResult | 'removed' };
}

declare module 'config' {
  interface IConfig {
    course: {
    }
  }
}
