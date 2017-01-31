import { IMetaNode } from 'rw-course';
export const scanSitemap = (root: IMetaNode, action: (n: IMetaNode) => void) => {
  action(root);
  if (root.childs) root.childs.forEach((n: IMetaNode) => scanSitemap(n, action));
}