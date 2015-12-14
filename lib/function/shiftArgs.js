export default function shiftArgs(fn, amount = 1) {
  return function shiftedArgs(...args) {
    return fn.apply(this, args.slice(amount));
  };
}
