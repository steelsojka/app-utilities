/* @flow */

let idMap = new WeakMap();

export default function timeout(fn:Function, delay:number, ...args:Array<any>):Promise {
  let timeoutId:number;

  const promise = new Promise((resolve:Function) => {
    timeoutId = setTimeout(function() {
      idMap.delete(promise);
      resolve(fn.apply(this, args));
    }, delay);
  });

  idMap.set(promise, timeoutId);

  return promise;
}

Object.assign(timeout, {
  cancel(promise:Promise):void {
    if (idMap.has(promise)) {
      clearTimeout(idMap.get(promise));
      idMap.delete(promise);
    }
  }
});
