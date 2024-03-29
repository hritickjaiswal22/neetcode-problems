function maxDistance(grid) {
  const n = grid.length;
  const dist = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  const queue = [];
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const neighbours = getNeighbours(i, j);

        for (const neighbour of neighbours) {
          const [row, col] = neighbour;
          if (
            isValidCell(row, col, n, n) &&
            grid[row][col] === 0 &&
            dist[row][col] === 0
          ) {
            queue.push([row, col, i, j]);
            dist[row][col] = 1;
          }
        }
      }
    }
  }

  while (queue.length > 0) {
    const [i, j, parentRow, parentCol] = queue.shift();
    const neighbours = getNeighbours(i, j);

    for (const neighbour of neighbours) {
      const [row, col] = neighbour;
      const temp = getManhattanDistance(row, col, parentRow, parentCol);

      if (
        isValidCell(row, col, n, n) &&
        grid[row][col] === 0 &&
        temp > dist[row][col]
      ) {
        dist[row][col] = temp;
        queue.push([row, col, parentRow, parentCol]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result = Math.max(result, dist[i][j]);
    }
  }

  if (!result) return -1;
  return result;
}

function getManhattanDistance(x0, y0, x1, y1) {
  return Math.abs(x0 - x1) + Math.abs(y0 - y1);
}

function isValidCell(i, j, n, m) {
  if (i >= 0 && i < n && j >= 0 && j < m) return true;
  return false;
}

function getNeighbours(i, j) {
  const neighbours = [];

  for (let k = -1; k <= 1; k++) {
    for (let l = -1; l <= 1; l++) {
      if (k === 0 && l === 0) continue;
      if (k === 0 || l === 0) neighbours.push([i + k, j + l]);
    }
  }

  return neighbours;
}
