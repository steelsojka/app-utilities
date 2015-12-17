/* @flow */

import isFunction from 'lodash.isfunction';
import isObject from 'lodash.isobject';

export default function isIterator(iterator:any):boolean {
  return isObject(iterator) && (isFunction(iterator.next) || ('done' in iterator));
}
