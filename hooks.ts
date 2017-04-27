import { createStore, applyMiddleware } from 'redux';  
import createSagaMiddleware from 'redux-saga/index';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';     

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action: any) {
  try {
    const user = yield { id: 123 }; //call(Api.fetchUser, action.payload.userId);
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });  
  } 
}

export const init = () => { 
  test1();
  test2();
  test3();
};

function test3() {
  const gen = testGenerator();
  for (let i of gen) {
    console.log(i);
  }
}

function test2() {
  speakLikeSloth("never gonna give you up never gonna let you down".split(" ")); 
}

function test1() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    (st: any, act: any) => {
      if (!st) return {};
      console.log(act.type);
      return st;
    },
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(mySaga);

  store.dispatch({ type: 'USER_FETCH_REQUESTED' });
}

function* testGenerator() {
  yield 1;
  yield 2;
  return 4;
}

// Returns a Promise that resolves after a certain amount of time. 
function sleep(milliseconds: number) {
  return new Promise<void>(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

// This converts the iterable into an async iterable.
// Each element is yielded back with a delay.
async function* getItemsReallySlowly<T>(items: string[]): any { 
  for (const item of items) {
    await sleep(500);
    yield item;
  }
}

async function speakLikeSloth(items: string[]) {
  // Awaits before each iteration until a result is ready.
  for await (let item of getItemsReallySlowly(items)) {
    console.log(item);
  }
}
