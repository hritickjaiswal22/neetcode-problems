// Redo done

function minPathSum(grid) {
  function find(i, j, m, n, grid) {
    if (i >= m || j >= n) return Infinity;
    if (i === m - 1 && j === n - 1) return grid[i][j];
    if (t[i][j] !== null) return t[i][j];

    return (t[i][j] =
      grid[i][j] +
      Math.min(find(i + 1, j, m, n, grid), find(i, j + 1, m, n, grid)));
  }

  const m = grid.length;
  const n = grid[0].length;
  const t = Array(m + 1)
    .fill()
    .map((_) => Array(n + 1).fill(null));

  return find(0, 0, m, n, grid);
}
