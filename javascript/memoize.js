function memoize(fn) {
  const hash = {};
  let callCount = 0;

  return function (...args) {
    callCount++;
    if (hash[args]) return hash[args];
    if (args.length === 0) return callCount;

    const result = fn(...args);
    hash[args] = result;
  };
}
