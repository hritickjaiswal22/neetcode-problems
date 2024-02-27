function gridGame(grid) {
  const n = grid[0].length;
  const sums = Array(2)
    .fill()
    .map((_) => Array(n).fill(0));

  let prefix = 0;
  let suffix = 0;
  let max = 0;
  let changeOverIndex = 0;
  let result = 0;

  for (let i = 0; i < n; i++) {
    prefix += grid[0][i];
    sums[0][i] = prefix;
  }

  for (let i = n - 1; i >= 0; i--) {
    suffix += grid[1][i];
    sums[1][i] = suffix;
  }

  for (let i = 0; i < n; i++) {
    const temp = sums[0][i] + sums[1][i];

    if (temp > max) {
      max = temp;
      changeOverIndex = i;
    }
  }

  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < n; i++) {
    if (i < changeOverIndex) sum1 += grid[1][i];
    if (i > changeOverIndex) sum2 += grid[0][i];
  }

  return Math.max(sum1, sum2);
}
