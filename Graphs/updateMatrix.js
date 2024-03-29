// VERY IMPORTANT PROBLEM COULDN'T SOLVE IN 1 GO

function updateMatrix(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const visited = Array(m)
    .fill()
    .map((_) => Array(n).fill(false));
  const result = Array(m)
    .fill()
    .map((_) => Array(n).fill(Number.MAX_SAFE_INTEGER));
  const queue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        visited[i][j] = true;
        queue.push([i, j, 0]);
      }
    }
  }

  while (queue.length > 0) {
    const [i, j, dist] = queue.shift();

    result[i][j] = dist;

    if (i - 1 >= 0 && !visited[i - 1][j]) {
      visited[i - 1][j] = true;
      queue.push([i - 1, j, dist + 1]);
    }
    if (i + 1 < m && !visited[i + 1][j]) {
      visited[i + 1][j] = true;
      queue.push([i + 1, j, dist + 1]);
    }
    if (j - 1 >= 0 && !visited[i][j - 1]) {
      visited[i][j - 1] = true;
      queue.push([i, j - 1, dist + 1]);
    }
    if (j + 1 < n && !visited[i][j + 1]) {
      visited[i][j + 1] = true;
      queue.push([i, j + 1, dist + 1]);
    }
  }

  return result;
}
