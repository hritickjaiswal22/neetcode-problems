function totalNQueens(n) {
  function find(i, temp) {
    if (i >= n) {
      result++;
      return;
    }

    for (let j = 0; j < n; j++) {
      if (!isAttacked(temp, j)) find(i + 1, [...temp, j]);
    }
  }

  let result = 0;

  find(0, []);

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
