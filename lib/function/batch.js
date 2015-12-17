/* @flow */

export default function batch(fn:Function, timeout:number = 0):Function {
  let promise:?Promise = null;
  let timeoutId:?number = null;
  let args:Array<any> = [];
  let resolve:?Function = null;
  
  return function batchedFn(...items:Array<any>):Promise {
    args.push(...items);
    
    if (!promise) {
      promise = new Promise((r:Function) => resolve = r)
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
