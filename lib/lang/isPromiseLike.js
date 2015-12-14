import isFunction from 'lodash.isfunction';
import isObject from 'lodash.isobject';

export default function isPromiseLike(promise) {
  return isObject(promise) && isFunction(promise.then);
}
