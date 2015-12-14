import isUndefined from 'lodash.isundefined';

export default class BaseCompositeKeyMap {
  set(keys, value) {
    let currentMap = this.map;

    for (let key of keys) {
      let nextMap = currentMap.get(key);

      if (!nextMap) {
        nextMap = new Map();
        currentMap.set(key, nextMap);
      }

      currentMap = nextMap;
    }

    currentMap.set(keys[keys.length - 1], value);
  }

  get(keys) {
    let nextMap = this.map;

    for (let key of keys) {
      nextMap = nextMap.get(key);

      if (isUndefined(nextMap)) {
        break;
      }
    }

    return nextMap;
  }

  has(keys) {
    return !isUndefined(this.get(keys));
  }
}
