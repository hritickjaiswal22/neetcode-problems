function exist(board, word) {
  function find(i, j, k) {
    if (k >= word.length) return true;
    if (i < 0 || i >= m || j < 0 || j >= n) return false;
    if (visited[i][j]) return false;
    if (word[k] !== board[i][j]) return false;

    visited[i][j] = true;

    const top = find(i - 1, j, k + 1);
    const bottom = find(i + 1, j, k + 1);
    const left = find(i, j - 1, k + 1);
    const right = find(i, j + 1, k + 1);

    visited[i][j] = false;

    return top || bottom || left || right;
  }

  const m = board.length;
  const n = board[0].length;
  let visited = Array(m)
    .fill()
    .map((_) => Array(n).fill(false));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        visited = Array(m)
          .fill()
          .map((_) => Array(n).fill(false));
        const result = find(i, j, 0);

        if (result) return true;
      }
    }
  }

  return false;
}
