function uniquePathsWithObstacles(obstacleGrid) {
  function find(i, j, t, rows, columns, obstacleGrid) {
    if (i >= rows || j >= columns || obstacleGrid[i][j] === 1) return 0;
    if (i === rows - 1 && j === columns - 1) return 1;
    if (t[i][j] !== null) return t[i][j];

    return (t[i][j] =
      find(i + 1, j, t, rows, columns, obstacleGrid) +
      find(i, j + 1, t, rows, columns, obstacleGrid));
  }

  const rows = obstacleGrid.length;
  const columns = obstacleGrid[0].length;
  const t = Array(rows + 1)
    .fill()
    .map((_) => Array(columns + 1).fill(null));

  return find(0, 0, t, rows, columns, obstacleGrid);
}
