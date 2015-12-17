/* @flow */

import isFunction from 'lodash.isfunction';
import isObject from 'lodash.isobject';

export default function isPromiseLike(promise:any):boolean {
  return isObject(promise) && isFunction(promise.then);
}
