/* @flow */

export default function shiftArgs(fn:Function, amount:number = 1):Function {
  return function shiftedArgs(...args:Array<any>):any {
    return fn.apply(this, args.slice(amount));
  };
}
