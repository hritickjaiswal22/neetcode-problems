function solveNQueens(n) {
  function find(i, temp) {
    if (i >= n) {
      result.push(createBoard(temp, n));
      return;
    }

    for (let j = 0; j < n; j++) {
      if (!isAttacked(temp, j)) find(i + 1, [...temp, j]);
    }
  }

  const result = [];

  find(0, []);

  return result;
}

function createBoard(arr, n) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (j === arr[i]) str += "Q";
      else str += ".";
    }
    result.push(str);
  }

  return result;
}

function isAttacked(cols, targetCol) {
  const targetRow = cols.length;

  for (let i = 0; i < cols.length; i++) {
    const row = i;
    const col = cols[i];

    if (
      col === targetCol ||
      Math.abs(targetRow - row) / Math.abs(targetCol - col) === 1
    )
      return true;
  }

  return false;
}
