function createCounter(n) {
  let result = n;

  return function () {
    const temp = result;
    result++;
    return temp;
  };
}
