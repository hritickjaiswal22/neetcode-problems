// function uniquePathsWithObstacles(obstacleGrid) {
//   function find(i, j, t, rows, columns, obstacleGrid) {
//     if (i >= rows || j >= columns || obstacleGrid[i][j] === 1) return 0;
//     if (i === rows - 1 && j === columns - 1) return 1;
//     if (t[i][j] !== null) return t[i][j];

//     return (t[i][j] =
//       find(i + 1, j, t, rows, columns, obstacleGrid) +
//       find(i, j + 1, t, rows, columns, obstacleGrid));
//   }

//   const rows = obstacleGrid.length;
//   const columns = obstacleGrid[0].length;
//   const t = Array(rows + 1)
//     .fill()
//     .map((_) => Array(columns + 1).fill(null));

//   return find(0, 0, t, rows, columns, obstacleGrid);
// }

function uniquePathsWithObstacles(obstacleGrid) {
  function find(i, j) {
    if (i < 0 || i >= n || j < 0 || j >= m || obstacleGrid[i][j] === 1)
      return 0;
    if (i === n - 1 && j === m - 1) return 1;
    if (t[i][j] !== null) return t[i][j];

    return (t[i][j] = find(i + 1, j) + find(i, j + 1));
  }

  const n = obstacleGrid.length;
  const m = obstacleGrid[0].length;
  const t = Array(n + 2)
    .fill()
    .map(() => Array(m + 2).fill(null));

  return find(0, 0);
}
