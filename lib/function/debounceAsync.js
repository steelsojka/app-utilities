/* @flow */

export default function debounceAsync(fn:Function, timeout:number = 0):Function {
  let promise:?Promise = null;
  let resolve:?Function = null;
  let timeoutId:?number = null;

  return function debouncedAsync(...args:Array<any>):Promise {
    if (!promise) {
      promise = new Promise((r:Function) => resolve = r)
        .then(() => {
          promise = null;
          resolve = null;
          timeoutId = null;

          return fn.apply(this, args);
        });
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(resolve, timeout);

    return promise;
  };
}
