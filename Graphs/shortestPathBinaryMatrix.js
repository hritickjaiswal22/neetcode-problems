function shortestPathBinaryMatrix(grid) {
  const n = grid.length;
  const visited = Array(n)
    .fill()
    .map(() => Array(n).fill(false));
  const queue = [];
  let result = Number.MAX_SAFE_INTEGER;

  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;

  queue.push([0, 0, 1]);
  visited[0][0] = 1;

  while (queue.length) {
    const [i, j, dist] = queue.shift();

    if (i === n - 1 && j === n - 1) result = Math.min(result, dist);

    for (let r = -1; r <= 1; r++) {
      for (let c = -1; c <= 1; c++) {
        if (r === 0 && c === 0) continue;

        const row = i + r;
        const col = j + c;

        if (
          isValidCell(row, col, n) &&
          !visited[row][col] &&
          grid[row][col] === 0
        ) {
          visited[row][col] = true;
          queue.push([row, col, dist + 1]);
        }
      }
    }
  }

  if (result === Number.MAX_SAFE_INTEGER) return -1;
  return result;
}

function isValidCell(i, j, n) {
  if (i >= 0 && i < n && j >= 0 && j < n) return true;
  return false;
}
