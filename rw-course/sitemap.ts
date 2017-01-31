//import { IMetaNode } from 'rw-course';
export const scanSitemap = (root: DCourse.IMetaNode, action: (n: DCourse.IMetaNode) => void) => {
  action(root);
  if (root.childs) root.childs.forEach((n: DCourse.IMetaNode) => scanSitemap(n, action));
}