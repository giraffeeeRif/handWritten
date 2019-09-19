class MyPromise {
  constructor(executor) {
    let resolve = () => {};
    let reject = () => {};
    executor(resolve, reject);
  }
}
