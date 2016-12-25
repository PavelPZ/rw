//https://github.com/systemjs/systemjs/blob/master/docs/system-api.md

import { config } from 'config';

export class lazyModuleHandler {
  constructor(public id: string) { this.name = `${config.rootPath}${this.id}`; }
  name: string; //SystemJS normalized name, eg. http:/localhost/module.js
  module: any; //loaded module
  onLoading() { } //before loading hook
  onLoaded() { } //loaded hook
  onUnloaded() { } //unloaded hook
}

export function load(handler: lazyModuleHandler): Promise<lazyModuleHandler> {
  return new Promise((resolve, reject) => {
    if (handler) handler.onLoading();
    System.import(handler.id).then(m => {
      handler.module = m;
      handler.onLoaded();
      console.log(`lazy-loader.loaded: ${handler.id}`);
      resolve(handler);
    }).catch(err => reject(err));
  });
}

export function unload(handler: lazyModuleHandler) {
  const m = System.get(handler.name);
  if (!m || handler.module !== m) throw new Error('mod.module !== m');
  handler.onUnloaded();
  System.delete(handler.name);
  console.log(`lazy-loader.unloaded: ${handler.id}`);
}