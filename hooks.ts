//import { createStore, applyMiddleware } from 'redux';
//import createSagaMiddleware from 'redux-saga/index';
//import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
////declare const System;
////if (System) {
////  const oldNormalize = System.normalize;
////  System.normalize = function (name, parentName) {
////    const res: Promise<any> = oldNormalize.apply(this, arguments); if (!(res instanceof Promise)) return res;
////    return res.then(x => {
////      return x;
////    });
////  };

////  const oldFetch = System.fetch;
////  System.fetch = function (obj) {
////    const res: Promise<any> = oldFetch.apply(this, arguments); if (!(res instanceof Promise)) return res;
////    return res.then(x => {
////      return x;
////    });
////  };

////  const oldInstantiate = System.instantiate;
////  System.instantiate = function (obj) {
////    const res: Promise<any> = oldInstantiate.apply(this, arguments); if (!(res instanceof Promise)) return res;
////    return res.then(x => {
////      return x;
////    });
////  };

////  const oldTranslate = System.translate;
////  System.translate = function (obj) {
////    const res: Promise<any> = oldTranslate.apply(this, arguments); if (!(res instanceof Promise)) return res;
////    return res.then(x => {
////      return x;
////    });
////  };
////}

////D:\rw\rw\jspm.config.js
////"redux-saga": "npm:redux-saga@0.14.6/lib",
////"redux-saga/effects": "npm:redux-saga@0.14.6/lib/effects",



//function* mySaga() {
//  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
//}

//// worker Saga: will be fired on USER_FETCH_REQUESTED actions
//function* fetchUser(action: any) {
//  try {
//    const user = yield { id: 123 }; //call(Api.fetchUser, action.payload.userId);
//    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
//  } catch (e) {
//    yield put({ type: "USER_FETCH_FAILED", message: e.message });
//  }
//}

//export const init = () => {
//  test1();
//  test2();
//  test3();
//};

//function test3() {
//  const gen = testGenerator();
//  for (let i of gen) {
//    console.log(i);
//  }
//}

//function test2() {
//  speakLikeSloth("never gonna give you up never gonna let you down".split(" "));
//}

//function test1() {
//  const sagaMiddleware = createSagaMiddleware();
//  const store = createStore(
//    (st: any, act: any) => {
//      if (!st) return {};
//      console.log(act.type);
//      return st;
//    },
//    applyMiddleware(sagaMiddleware)
//  );
//  sagaMiddleware.run(mySaga);

//  store.dispatch({ type: 'USER_FETCH_REQUESTED' });
//}

//function* testGenerator() {
//  yield 1;
//  yield 2;
//  return 4;
//}

//// Returns a Promise that resolves after a certain amount of time. 
//function sleep(milliseconds: number) {
//  return new Promise<void>(resolve => {
//    setTimeout(resolve, milliseconds);
//  });
//}

//// This converts the iterable into an async iterable.
//// Each element is yielded back with a delay.
//async function* getItemsReallySlowly<T>(items: string[]): any { 
//  for (const item of items) {
//    await sleep(500);
//    yield item;
//  }
//}

//async function speakLikeSloth(items: string[]) {
//  // Awaits before each iteration until a result is ready.
//  for await (let item of getItemsReallySlowly(items)) {
//    console.log(item);
//  }
//}
