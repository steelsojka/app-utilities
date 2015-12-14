let idMap = new WeakMap();

export default function timeout(fn, delay, ...args) {
  let timeoutId;

  const promise = new Promise(resolve => {
    timeoutId = setTimeout(function() {
      idMap.delete(promise);
      resolve(fn.apply(this, ...args));
    }, delay);
  });

  idMap.set(promise, timeoutId);

  return promise;
}

Object.assign(timeout, {
  cancel(promise) {
    if (idMap.has(promise)) {
      clearTimeout(idMap.get(promise));
      idMap.delete(promise);
    }
  }
});
