/* @flow */

import BaseCompositeKeyMap from '../internal/BaseCompositeKeyMap';

export default class CompositeKeyWeakMap extends BaseCompositeKeyMap {
  constructor() {
    Reflect.defineProperty(this, 'map', { value: new WeakMap() });
  }
}
