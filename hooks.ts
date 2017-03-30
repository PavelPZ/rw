//declare const System;
//if (System) {
//  const oldNormalize = System.normalize;
//  System.normalize = function (name, parentName) {
//    const res: Promise<any> = oldNormalize.apply(this, arguments); if (!(res instanceof Promise)) return res;
//    return res.then(x => {
//      return x;
//    });
//  };

//  const oldFetch = System.fetch;
//  System.fetch = function (obj) {
//    const res: Promise<any> = oldFetch.apply(this, arguments); if (!(res instanceof Promise)) return res;
//    return res.then(x => {
//      return x;
//    });
//  };

//  const oldInstantiate = System.instantiate;
//  System.instantiate = function (obj) {
//    const res: Promise<any> = oldInstantiate.apply(this, arguments); if (!(res instanceof Promise)) return res;
//    return res.then(x => {
//      return x;
//    });
//  };

//  const oldTranslate = System.translate;
//  System.translate = function (obj) {
//    const res: Promise<any> = oldTranslate.apply(this, arguments); if (!(res instanceof Promise)) return res;
//    return res.then(x => {
//      return x;
//    });
//  };
//}
let x: object;
