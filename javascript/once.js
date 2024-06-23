function once(fn) {
  let flag = false;

  return function (...args) {
    if (flag) return;

    flag = true;
    return fn(...args);
  };
}
