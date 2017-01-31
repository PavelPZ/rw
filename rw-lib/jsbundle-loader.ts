import keys from 'lodash/keys';

//https://github.com/systemjs/systemjs/blob/master/docs/system-api.md
//import load from 'load-script';

export class Loader {
  constructor(public id: string, public subId?: string) {
    this.name = System.normalizeSync(id)
  }
  name: string; //full module or bundle name
  lazyLoaded: Array<string>; //all dependencies

  load(): Promise<any> {
    let oldInstantiate;
    let lazyLoaded: { [name: string]: boolean; } = {}

    const start = () => {
      if (Loader.justLoading) throw new Error('Loader.loading');
      Loader.justLoading = true;
      oldInstantiate = System.instantiate;
      System.instantiate = function (obj) {
        lazyLoaded[obj.name] = true; //register module, loaded in bundle
        return oldInstantiate.apply(this, arguments);
      };
    }

    const finish = (res: boolean) => {
      System.instantiate = oldInstantiate; Loader.justLoading = false;
      if (!res) return;
      this.lazyLoaded = keys(lazyLoaded);
    };

    return new Promise((res, rej) => {
      start();
      System.import(this.name).then(m => {
        if (!this.subId) { finish(true); res(m); return; }
        const subName = System.normalizeSync(this.subId);
        System.import(subName).then(m => { finish(true); res(m); }).catch(err => { finish(false); rej(err); });
      }).catch(err => { finish(false); rej(err); });
    });
  }

  unload() {
    if (!this.lazyLoaded) return;
    this.lazyLoaded.forEach(name => {
      //const m = System.get(name); if (!m) return;
      System.delete(name);
    });
    delete this.lazyLoaded; delete this.name;
  }

  static replaceLoader(old: Loader, id: string, subId: string, setLoader: (nw: Loader) => void): Promise<any> {
    if (old && old.id === id) return null;
    const nw = new Loader(id, subId); setLoader(nw);
    return nw.load();
  }

  private static justLoading: boolean; //hlida paralelni beh dvou LOAD najednou, coz neni dovoleno
}

//export const loadBundle = (relBundle: string, relModule: string) => {
//  return new Promise((resolve, reject) => {
//    System.normalize(relBundle).then(modUrl => { //get full bundle URL
//      const modules: { [name: string]: boolean; } = {};
//      //hook System.instantiate, 
//      const oldInstantiate = System.instantiate;
//      System.instantiate = function (obj) {
//        modules[obj.name] = true; //register module, loaded in bundle
//        return oldInstantiate.apply(this, arguments); 
//      };
//      //create 
//      const unloadBundle = load(modUrl, (err, script) => {
//        if (err) { reject(err); return; }
//        //remove loaded modules from SystemJS cache
//        System.import(relModule).then(mod => {
//          System.instantiate = oldInstantiate;
//          for (const name in modules) {
//            const m = System.get(name); if (!m) continue;
//            System.delete(name);
//            delete modules[name];
//          }
//          resolve(mod);
//        });
//      })
//    });
//  });
//};


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