/* @flow */

import get from 'lodash.get';
import isFunction from 'lodash.isfunction';

export default function resolveWith(path:string, object:any, ...args:Array<any>):any {
  const value:any = get(object, path);
  return isFunction(value) ? value(...args) : value;
}
