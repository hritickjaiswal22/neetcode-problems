function map(arr, fn) {
  const result = [];

  arr.forEach((element, i) => {
    result.push(fn(element, i));
  });

  return result;
}
