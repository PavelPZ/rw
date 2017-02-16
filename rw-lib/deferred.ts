export class Deferred<T> {
  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.reject = reject; this.resolve = resolve;
    })
  }
  promise: Promise<T>;
  resolve: (value?: T | PromiseLike<T>) => void;
  reject: (reason?: any) => void;
}

export class StartablePromise<T> {
  constructor(public getPromise: () => Promise<T>) {
    this.deferred = new Deferred<T>();
    this.promise = this.deferred.promise;
  }
  start(): Promise<T> {
    const prom = this.getPromise();
    prom.then(res => this.deferred.resolve(res)).catch(err => this.deferred.reject(err));
    return prom;
  }
  promise: Promise<T>;
  private deferred: Deferred<T>;
}
export type TStartablePromise = StartablePromise<any>;

export class PromiseQueue {
  constructor(private onSuccess?: () => void, private onError?: (err) => void) { }
  add<T>(getPromise: () => Promise<T>): Promise<T> {
    const stPromise = new StartablePromise(getPromise);
    this.queue.push(stPromise);
    this.run();
    return stPromise.promise;
  }
  run() {
    if (this.running || this.queue.length == 0) { if (this.queue.length == 0 && this.onSuccess) this.onSuccess(); return; }
    const first = this.queue[0]; this.queue = this.queue.slice(1);
    this.running = true;
    first.start().then(() => { this.running = false; this.run(); }).catch(err => { if (this.onError) this.onError(err); });
  }
  queue: Array<TStartablePromise> = [];
  running: boolean;
}

export const timerPromise = (msec: number) => new Promise(resolve => setTimeout(() => resolve(), msec));

//******* TEST

export const init = () => {
  testStartable();
  testQueue();
};

const testStartable = () => {
  const sp = new StartablePromise<string>(() => new Promise<string>((resolve, reject) => { resolve(''); }));
  sp.promise.then(() => console.log('done 1'));
  setTimeout(() => sp.start().then(() => console.log('done 2')), 1000);
};

const testQueue = () => {
  const queue = new PromiseQueue(() => alert('success'));
  queue.add(() => timerPromise(1000));
  queue.add(() => timerPromise(1000));
  setTimeout(() => queue.add(() => timerPromise(500)), 3000);
};
