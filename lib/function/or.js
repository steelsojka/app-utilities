/* @flow */

export default function or(...functions:Array<Function>):Function {
  return function thisOrThat(...args:Array<any>):boolean {
    return functions.some((fn:Function) => fn.apply(this, args));
  };
}
