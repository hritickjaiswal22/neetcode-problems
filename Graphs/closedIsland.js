function closedIsland(grid) {
  function find(i, j) {
    if (!isValidCell(i, j, n, m) || grid[i][j] === 1 || visited[i][j]) return;

    grid[i][j] = islandNumber;
    visited[i][j] = true;
    const neighbours = getNeighbours(i, j);

    for (const neighbour of neighbours) {
      const [row, col] = neighbour;

      find(row, col);
    }
  }

  const n = grid.length;
  const m = grid[0].length;
  const edgeLandsMap = Array(n)
    .fill()
    .map(() => Array(m).fill(false));
  const queue = [];
  const visited = Array(n)
    .fill()
    .map(() => Array(m).fill(false));
  let islandNumber = 2;
  let result = 1;

  for (let i = 0; i < n; i++) {
    if (grid[i][0] === 0) {
      edgeLandsMap[i][0] = true;
      queue.push([i, 0]);
    }
    if (grid[i][m - 1] === 0) {
      edgeLandsMap[i][m - 1] = true;
      queue.push([i, m - 1]);
    }
  }

  for (let i = 0; i < m; i++) {
    if (grid[0][i] === 0) {
      edgeLandsMap[0][i] = true;
      queue.push([0, i]);
    }
    if (grid[n - 1][i] === 0) {
      edgeLandsMap[n - 1][i] = true;
      queue.push([n - 1, i]);
    }
  }

  while (queue.length > 0) {
    const [i, j] = queue.shift();
    const neighbours = getNeighbours(i, j);

    for (const neighbour of neighbours) {
      const [row, col] = neighbour;

      if (
        isValidCell(row, col, n, m) &&
        grid[row][col] === 0 &&
        !edgeLandsMap[row][col]
      ) {
        edgeLandsMap[row][col] = true;
        queue.push([row, col]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0 && !visited[i][j] && !edgeLandsMap[i][j]) {
        find(i, j);
        islandNumber++;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      result = Math.max(result, grid[i][j]);
    }
  }

  return result - 1;
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
