import keys from 'lodash/keys';
import { PromiseQueue } from './deferred';

//https://github.com/systemjs/systemjs/blob/master/docs/system-api.md
//import load from 'load-script';

export class Loader implements DLib.Loader {
  constructor(public id: string /*short name, e.g. rw-lib/loc.js, for bundle or module*/, public idInBundle?: string /*module id when this.id is bundle*/) {
    this.name = System.normalizeSync(id)
  }
  private name: string; //full module or bundle name, e.g. http://localhost/rw-lib/loc.js
  private lazyLoaded: Array<string>; //all dependencies
  mod: any;

  load(): Promise<any> {
    if (this.mod) return Promise.resolve(this.mod);
    return Loader.queue.add(() => this.doLoad());
  }

  private doLoad(): Promise<any> {

    //if (Loader.justLoading) throw new Error('Loader.loading');
    //Loader.justLoading = true;

    let oldInstantiate;
    let lazyLoaded: { [name: string]: boolean; } = {}

    const start = () => {
      oldInstantiate = System.instantiate;
      System.instantiate = function (obj) {
        lazyLoaded[obj.name] = true; //register module, loaded in bundle
        return oldInstantiate.apply(this, arguments);
      };
    }

    const finish = (mod?: any) => {
      System.instantiate = oldInstantiate; //Loader.justLoading = false;
      if (!mod) return;
      this.mod = mod;
      this.lazyLoaded = keys(lazyLoaded);
      console.log(`*L* loaded ${this.lazyLoaded.reduce((r, i) => r + ', ' + i)}`);
    };

    return new Promise((resume, reject) => {
      start();
      System.import(this.name).then(m => {
        if (!this.idInBundle) { finish(m); resume(m); return; }
        const subName = System.normalizeSync(this.idInBundle);
        const subm = System.get(subName);
        if (!subm) { finish(); reject('!subm'); } else { finish(subm); resume(subm); }
        //System.import(subName).then(m => { finish(true); res(m); }).catch(err => { finish(false); rej(err); });
      }).catch(err => { finish(null); reject(err); });
    });
  }

  unload(): Promise<any> {
    if (!this.lazyLoaded) return null;
    this.lazyLoaded.forEach(name => {
      //const m = System.get(name); if (!m) return;
      console.log(`*L* unloaded ${this.lazyLoaded.reduce((r, i) => r + ', ' + i)}`);
      System.delete(name);
    });
    delete this.lazyLoaded; delete this.name;
    return null;
  }

  //static replaceLoader(old: Loader, id: string, subId: string, setLoader: (nw: Loader) => void): Promise<any> {
  //  if (old && old.id === id) return null;
  //  const nw = new Loader(id, subId); setLoader(nw);
  //  return nw.load();
  //}

  //private static justLoading: boolean; //hlida paralelni beh dvou LOAD najednou, coz neni dovoleno
  private static queue: PromiseQueue = new PromiseQueue(() => { }, err => { throw new Error(err); });
}

export class LoaderCache {
  constructor(private len: number) { }
  adjust<T extends DLib.Loader>(getLoader: () => T, itsMe: (l: T) => boolean): Promise<any> {
    let res = this.queue.find(l => itsMe(l as T));
    if (res) {
      if (res !== this.queue[this.queue.length - 1]) {
        const idx = this.queue.indexOf(res);
        this.queue.splice(idx, 1); this.queue.push(res);
      }
      return res.load();
    }
    let unload: Promise<any> = null;
    if (this.queue.length == this.len) {
      unload = this.queue[0].unload();
      this.queue.splice(0, 1);
    }
    res = getLoader();
    this.queue.push(res);
    return unload ? unload.then(() => res.load()) : res.load();
  }
  private queue: Array<DLib.Loader> = [];
}