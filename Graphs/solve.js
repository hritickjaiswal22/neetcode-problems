function solve(board) {
  const m = board.length;
  const n = board[0].length;
  const visited = Array(m)
    .fill()
    .map(() => Array(n).fill(false));
  const queue = [];

  for (let i = 0; i < n; i++) {
    if (board[0][i] === "O") {
      visited[0][i] = true;
      queue.push([0, i]);
    }
    if (board[m - 1][i] === "O") {
      visited[m - 1][i] = true;
      queue.push([m - 1, i]);
    }
  }

  for (let i = 0; i < m; i++) {
    if (board[i][0] === "O") {
      visited[i][0] = true;
      queue.push([i, 0]);
    }
    if (board[i][n - 1] === "O") {
      visited[i][n - 1] = true;
      queue.push([i, n - 1]);
    }
  }

  while (queue.length > 0) {
    const [i, j] = queue.shift();

    if (i - 1 >= 0 && board[i - 1][j] === "O" && !visited[i - 1][j]) {
      visited[i - 1][j] = true;
      queue.push([i - 1, j]);
    }
    if (i + 1 < m && board[i + 1][j] === "O" && !visited[i + 1][j]) {
      visited[i + 1][j] = true;
      queue.push([i + 1, j]);
    }
    if (j - 1 >= 0 && board[i][j - 1] === "O" && !visited[i][j - 1]) {
      visited[i][j - 1] = true;
      queue.push([i, j - 1]);
    }
    if (j + 1 < n && board[i][j + 1] === "O" && !visited[i][j + 1]) {
      visited[i][j + 1] = true;
      queue.push([i, j + 1]);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O" && !visited[i][j]) board[i][j] = "X";
    }
  }

  return board;
}
