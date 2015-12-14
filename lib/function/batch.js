export default function batch(fn, timeout) {
  let promise = null;
  let timeoutId = null;
  let args = [];
  let resolve = null;
  
  return function batchedFn(...items) {
    args.push(...items);
    
    if (!promise) {
      promise = new Promise(r => resolve = r)
        .then(() => {
          let batchedItems = args;
          
          fn.apply(this, args);
          
          args = [];
          timeoutId = null;
          promise = null;
          resolve = null;
          
          return batchedItems;
        });
    }  
    
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(resolve, timeout);
    
    return promise;
  };
}
