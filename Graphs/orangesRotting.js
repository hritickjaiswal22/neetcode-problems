function orangesRotting(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const queue = [];
  const visited = Array(m)
    .fill()
    .map((_) => Array(n).fill(false));
  let result = 0;
  let hasFreshOrange = false;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        visited[i][j] = true;
        queue.push([i, j, 0]);
      }
      if (grid[i][j] === 1) hasFreshOrange = true;
    }
  }

  if (!hasFreshOrange) return 0;

  while (queue.length > 0) {
    const [i, j, time] = queue.shift();

    result = Math.max(result, time);

    if (i - 1 >= 0 && !visited[i - 1][j] && grid[i - 1][j] !== 0) {
      visited[i - 1][j] = true;
      queue.push([i - 1, j, time + 1]);
    }
    if (i + 1 < m && !visited[i + 1][j] && grid[i + 1][j] !== 0) {
      visited[i + 1][j] = true;
      queue.push([i + 1, j, time + 1]);
    }
    if (j - 1 >= 0 && !visited[i][j - 1] && grid[i][j - 1] !== 0) {
      visited[i][j - 1] = true;
      queue.push([i, j - 1, time + 1]);
    }
    if (j + 1 < n && !visited[i][j + 1] && grid[i][j + 1] !== 0) {
      visited[i][j + 1] = true;
      queue.push([i, j + 1, time + 1]);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) return -1;
    }
  }

  return result;
}
