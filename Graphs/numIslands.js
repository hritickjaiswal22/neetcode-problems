function numIslands(grid) {
  function find(grid, i, j, n, m) {
    if (i < 0 || i >= n || j < 0 || j >= m) return;
    if (grid[i][j] !== "1") return;

    grid[i][j] = "2";

    find(grid, i + 1, j, n, m);
    find(grid, i - 1, j, n, m);
    find(grid, i, j + 1, n, m);
    find(grid, i, j - 1, n, m);
  }

  const n = grid.length;
  const m = grid[0].length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1") {
        result++;
        find(grid, i, j, n, m);
      }
    }
  }

  return result;
}
