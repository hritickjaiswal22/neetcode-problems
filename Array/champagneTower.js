function champagneTower(poured, query_row, query_glass) {
  let currentRow = [poured];
  let nextRow = Array(currentRow.length + 1).fill(0);

  for (let i = 0; i <= 100; i++) {
    for (let j = 0; j < currentRow.length; j++) {
      if (i === query_row && j === query_glass) {
        if (currentRow[j] > 1) return 1;
        return currentRow[j];
      }

      const rem = currentRow[j] - 1;

      if (rem > 0) {
        nextRow[j] += rem / 2;
        nextRow[j + 1] += rem / 2;
      }
    }

    currentRow = nextRow;
    nextRow = Array(currentRow.length + 1).fill(0);
  }

  return 0;
}
