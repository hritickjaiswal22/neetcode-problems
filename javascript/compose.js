function compose(functions) {
  functions.reverse();

  return function (x) {
    return functions.reduce((acc, fn) => fn(acc), x);
  };
}
