// Almost did it on my own
function gridGame(grid) {
  const n = grid[0].length;
  const prefix2d = Array(2)
    .fill()
    .map(() => Array(n).fill(0));
  let sum1 = 0;
  let sum2 = 0;
  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    sum1 += grid[0][i];
    prefix2d[0][i] = sum1;

    sum2 += grid[1][i];
    prefix2d[1][i] = sum2;
  }

  for (let i = 0; i < n; i++) {
    // const rob1Points =
    //   prefix2d[0][i] +
    //   (prefix2d[1][n - 1] - (i - 1 >= 0 ? prefix2d[1][i - 1] : 0));

    const rob2Points = Math.max(
      prefix2d[0][n - 1] - prefix2d[0][i],
      i - 1 >= 0 ? prefix2d[1][i - 1] : 0
    );

    result = Math.min(result, rob2Points);
  }

  return result;
}
