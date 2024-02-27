function replaceElements(arr) {
  const n = arr.length;
  let max = -1;

  for (let i = n - 1; i >= 0; i--) {
    const temp = arr[i];

    arr[i] = max;

    max = Math.max(max, temp);
  }

  return arr;
}
