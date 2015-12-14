export default function debounceAsync(fn, timeout) {
  let promise = null;
  let resolve = null;
  let timeoutId = null;

  return function debouncedAsync(...args) {
    if (!promise) {
      promise = new Promise(r => resolve = r)
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
