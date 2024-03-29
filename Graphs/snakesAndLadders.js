// ALL BY MYSELF!!!

function snakesAndLadders(board) {
  const n = board.length;
  const queue = [];
  let result = Number.MAX_SAFE_INTEGER;
  const visited = Array(n * n + 1).fill(Number.MAX_SAFE_INTEGER);

  board.reverse();
  queue.push([1, 0]);

  while (queue.length > 0) {
    let [num, dist] = queue.shift();
    const { column, row } = getBoustrophedonCell(num, n);

    if (num === n * n) result = Math.min(result, dist);

    if (board[row][column] !== -1 && dist <= visited[num]) {
      visited[num] = dist;
      num = board[row][column];

      if (board[row][column] === n * n) result = Math.min(result, dist);
    }

    for (let i = 1; i <= 6; i++) {
      const temp = num + i;

      if (temp > n * n) break;

      if (dist + 1 < visited[temp]) {
        visited[temp] = dist + 1;
        queue.push([temp, dist + 1]);
      }
    }
  }

  if (result === Number.MAX_SAFE_INTEGER) return -1;
  return result;
}

function getBoustrophedonCell(val, n) {
  const temp = Math.floor(val / n);
  const rem = val % n;
  const row = rem === 0 ? temp - 1 : temp;

  if (row % 2 === 0)
    return {
      row,
      column: rem === 0 ? n - 1 : rem - 1,
    };
  else
    return {
      row,
      column: rem === 0 ? 0 : n - rem,
    };
}
