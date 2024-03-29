function shortestBridge(grid) {
  const n = grid.length;
  let islandNumber = 1;
  const visited = Array(n)
    .fill()
    .map(() => Array(n).fill(false));
  const queue = [];
  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        findIslands(i, j, visited, grid, islandNumber);
        islandNumber++;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      visited[i][j] = false;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const neighbours = getNeighbours(i, j);

        for (const neighbour of neighbours) {
          const [row, col] = neighbour;

          if (
            isValidCell(row, col, n) &&
            grid[row][col] === 0 &&
            !visited[row][col]
          ) {
            visited[row][col] = true;
            queue.push([row, col, 1]);
          }
        }
      }
    }
  }

  while (queue.length > 0) {
    const [i, j, dist] = queue.shift();
    const neighbours = getNeighbours(i, j);

    for (const neighbour of neighbours) {
      const [row, col] = neighbour;

      if (isValidCell(row, col, n) && grid[row][col] === 2)
        result = Math.min(result, dist);

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

  return result;
}

function isValidCell(i, j, n) {
  const m = n;
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

function findIslands(i, j, visited, grid, islandNumber) {
  if (!isValidCell(i, j, grid.length) || grid[i][j] === 0 || visited[i][j])
    return;

  grid[i][j] = islandNumber;
  visited[i][j] = true;
  const neighbours = getNeighbours(i, j);

  for (const neighbour of neighbours) {
    const [row, col] = neighbour;

    findIslands(row, col, visited, grid, islandNumber);
  }
}
