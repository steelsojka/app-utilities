/* @flow */

export default class BaseCompositeKeyMap {
  map:Map<any, any>|WeakMap<any, any>;

  set(keys:Array<any>, value:any) {
    let currentMap = this.map;

    for (let key:any of keys) {
      let nextMap = currentMap.get(key);

      if (!nextMap) {
        nextMap = new Map();
        currentMap.set(key, nextMap);
      }

      currentMap = nextMap;
    }

    currentMap.set(keys[keys.length - 1], value);
  }

  get(keys:Array<any>):any {
    let nextMap = this.map;

    for (let key:any of keys) {
      nextMap = nextMap.get(key);

      if (nextMap === undefined) {
        break;
      }
    }

    return nextMap;
  }

  has(keys:Array<any>):boolean {
    return this.get(keys) !== undefined;
  }
}
