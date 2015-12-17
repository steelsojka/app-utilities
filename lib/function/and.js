/* @flow */

export default function and(...functions:Array<Function>):Function {
  return function thisAndThat(...args:Array<any>):boolean {
    return functions.every((fn:Function) => fn.apply(this, args));
  };
}
