export default function and(...functions) {
  return function thisAndThat(...args) {
    return functions.every(fn => fn.apply(this, args));
  };
}
