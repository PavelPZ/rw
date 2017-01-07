import { IConfig, config } from 'config';
import { IRootState } from 'rw-redux/types';
import * as objects from './dom';

declare module 'rw-redux/types' {
  interface IRootState {
    course?: { [contextId: string]: { [tagId: string]: objects.Result }; };
  }
}

declare module 'config' {
  interface IConfig {
    course: {
    }
  }
}
