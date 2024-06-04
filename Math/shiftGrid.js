function shiftGrid(grid, k) {
  const rows = grid.length;
  const columns = grid[0].length;
  let mainIndex = 0;
  k = k % (rows * columns);

  const result = Array(rows)
    .fill()
    .map(() => Array(columns).fill(2000));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let index = mainIndex;
      index = index + k;
      index = index % (rows * columns);

      const rowNo = Math.floor(index / columns);
      result[rowNo][index % columns] = grid[i][j];

      mainIndex++;
    }
  }

  return result;
}
