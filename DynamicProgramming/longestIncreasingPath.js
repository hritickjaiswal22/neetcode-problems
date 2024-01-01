function longestIncreasingPath(matrix) {
  function find(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n) return 0;
    if (t[i][j] !== null) return t[i][j];
    if (visited[i][j]) return 0;

    visited[i][j] = true;

    let result = 1;

    if (i - 1 >= 0 && matrix[i - 1][j] > matrix[i][j]) result += find(i - 1, j);
    if (i + 1 < m && matrix[i + 1][j] > matrix[i][j]) result += find(i + 1, j);
    if (j - 1 >= 0 && matrix[i][j - 1] > matrix[i][j]) result += find(i, j - 1);
    if (j + 1 < n && matrix[i][j + 1] > matrix[i][j]) result += find(i, j + 1);

    return (t[i][j] = result);
  }

  const m = matrix.length;
  const n = matrix[0].length;

  const t = Array(m + 1)
    .fill()
    .map((_) => Array(n + 1).fill(null));

  const visited = Array(m + 1)
    .fill()
    .map((_) => Array(n + 1).fill(false));

  let result = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) result = Math.max(result, find(i, j));
    }
  }

  return result;
}
