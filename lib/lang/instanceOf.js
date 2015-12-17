/* @flow */

export default function instanceOf(ctor:Function, object:any):boolean {
  return object instanceof ctor;
};
