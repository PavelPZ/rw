//import { IMetaNode } from 'rw-course/dom-meta';
import meta from './course.meta';

import module1 from './index';

const crs: DCourse.IMetaNode = {
  ...meta, 
  childs: [
    module1
  ]
};

export default crs;