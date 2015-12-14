export default function batch(fn, timeout) {
  let timeoutId = null;
  let callbacks = [];
  let args = [];
  
  return function batchedFn(item, callback) {
    args.push(item);
    
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    callbacks.push((...values) => callback.apply(this, values));
    
    timeoutId = setTimeout(resolve, timeout);
  };
  
  function resolve() {
    fn.apply(this, args);
    
    for (let callback of callbacks) {
      callback(...args);
    }
    
    timeoutId = null;
    args = [];
    callbacks = [];
  }
}
