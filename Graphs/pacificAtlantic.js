function pacificAtlantic(heights) {
  const m = heights.length;
  const n = heights[0].length;
  const pacificMap = Array(m)
    .fill()
    .map(() => Array(n).fill(false));
  const atlanticMap = Array(m)
    .fill()
    .map(() => Array(n).fill(false));
  const result = [];

  for (let i = 0; i < n; i++) {
    pacificMap[0][i] = true;
    atlanticMap[m - 1][i] = true;
  }

  for (let i = 0; i < m; i++) {
    pacificMap[i][0] = true;
    atlanticMap[i][n - 1] = true;
  }

  find(pacificMap, m, n, heights);
  find(atlanticMap, m, n, heights);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacificMap[i][j] && atlanticMap[i][j]) result.push([i, j]);
    }
  }

  return result;
}

function find(visited, n, m, heights) {
  const queue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j]) queue.push([i, j]);
    }
  }

  while (queue.length > 0) {
    const [i, j] = queue.shift();

    if (
      isValidCell(i - 1, j, n, m) &&
      !visited[i - 1][j] &&
      heights[i - 1][j] >= heights[i][j]
    ) {
      visited[i - 1][j] = true;
      queue.push([i - 1, j]);
    }
    if (
      isValidCell(i + 1, j, n, m) &&
      !visited[i + 1][j] &&
      heights[i + 1][j] >= heights[i][j]
    ) {
      visited[i + 1][j] = true;
      queue.push([i + 1, j]);
    }
    if (
      isValidCell(i, j - 1, n, m) &&
      !visited[i][j - 1] &&
      heights[i][j - 1] >= heights[i][j]
    ) {
      visited[i][j - 1] = true;
      queue.push([i, j - 1]);
    }
    if (
      isValidCell(i, j + 1, n, m) &&
      !visited[i][j + 1] &&
      heights[i][j + 1] >= heights[i][j]
    ) {
      visited[i][j + 1] = true;
      queue.push([i, j + 1]);
    }
  }
}

function isValidCell(i, j, n, m) {
  if (i >= 0 && i < n && j >= 0 && j < m) return true;
  return false;
}
