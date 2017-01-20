//https://github.com/systemjs/systemjs/blob/master/docs/system-api.md

import load from 'load-script';

declare const System;

export const loadBundle = (relBundle: string, relModule: string) => {
  return new Promise((resolve, reject) => {
    System.normalize(relBundle).then(modUrl => { //get full bundle URL
      const modules: { [name: string]: boolean; } = {};
      //hook System.instantiate, 
      const oldInstantiate = System.instantiate;
      System.instantiate = function (obj) {
        modules[obj.name] = true; //register module, loaded in bundle
        return oldInstantiate.apply(this, arguments); 
      };
      //create 
      const unloadBundle = load(modUrl, (err, script) => {
        if (err) { reject(err); return; }
        //remove loaded modules from SystemJS cache
        System.import(relModule).then(mod => {
          System.instantiate = oldInstantiate;
          for (const name in modules) {
            const m = System.get(name); if (!m) continue;
            System.delete(name);
            delete modules[name];
          }
          resolve(mod);
        });
      })
    });
  });
};


//export class lazyModuleHandler {
//  constructor(public relBundle: string, public relModule: string) {
//    //this.name = `${config.rootPath}${this.id}`; }
//  }
//  name: string; //SystemJS normalized name, eg. http://localhost/module.js
//  module: any; //loaded module
//  onLoading() { } //before loading hook
//  onLoaded() { } //loaded hook
//  onUnloaded() { } //unloaded hook
//}

//export function load(handler: lazyModuleHandler): Promise<lazyModuleHandler> {
//  return new Promise((resolve, reject) => {
//    if (handler) handler.onLoading();
//    System.import(handler.id).then(m => {
//      handler.module = m;
//      handler.onLoaded();
//      console.log(`lazy-loader.loaded: ${handler.id}`);
//      resolve(handler);
//    }).catch(err => reject(err));
//  });
//}

//export function unload(handler: lazyModuleHandler) {
//  const m = System.get(handler.name);
//  if (!m || handler.module !== m) throw new Error('mod.module !== m');
//  handler.onUnloaded();
//  System.delete(handler.name);
//  console.log(`lazy-loader.unloaded: ${handler.id}`);
//}
const x = 0;