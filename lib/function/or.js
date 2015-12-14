export default function or(...functions) {
  return function thisOrThat(...args) {
    return functions.some(fn => fn.apply(this, args));
  };
}
