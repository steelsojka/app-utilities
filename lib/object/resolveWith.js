import get from 'lodash.get';

export default function resolveWith(path, object, ...args) {
  const value = get(object, path);
  return isFunction(value) ? value(...args) : value;
}
