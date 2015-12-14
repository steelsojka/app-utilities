import isFunction from 'lodash.isfunction';
import isObject from 'lodash.isobject';

export default function isIterable(iterable) {
  return isObject(iterable) && isFunction(iterable[Symbol.iterator]);
}
