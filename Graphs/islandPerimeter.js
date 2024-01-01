function islandPerimeter(grid) {
  function find(i, j, visited, n, m) {
    if (i < 0 || i >= n || j < 0 || j >= m || grid[i][j] === 0) return 1;
    if (visited[i][j]) return 0;

    visited[i][j] = true;

    const top = find(i - 1, j, visited, n, m);
    const bottom = find(i + 1, j, visited, n, m);
    const left = find(i, j - 1, visited, n, m);
    const right = find(i, j + 1, visited, n, m);

    return top + right + bottom + left;
  }

  const n = grid.length;
  const m = grid[0].length;
  const visited = Array(n)
    .fill()
    .map((_) => Array(m).fill(false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) return find(i, j, visited, n, m);
    }
  }

  return 0;
}
