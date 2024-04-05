function fractionalKnapsack(W, arr, n) {
  let result = 0;
  let i = 0;

  arr.sort((a, b) => {
    const val1 = a.value / a.weight;
    const val2 = b.value / b.weight;

    if (val2 > val1) return 1;
    else return -1;
  });

  while (i < n && W > 0) {
    const { value, weight } = arr[i];

    if (W >= weight) {
      result += value;
      W -= weight;
    } else {
      const unitValue = value / weight;
      result += unitValue * W;
      W = 0;
    }
  }

  return result;
}
