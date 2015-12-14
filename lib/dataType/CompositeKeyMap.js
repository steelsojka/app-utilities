import BaseCompositeKeyMap from '../internal/BaseCompositeKeyMap';

export default class CompositeKeyMap extends BaseCompositeKeyMap {
  constructor() {
    Reflect.defineProperty(this, 'map', { value: new Map() });
  }
}
