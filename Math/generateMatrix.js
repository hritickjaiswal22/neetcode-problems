function generateMatrix(n) {
  const result = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  const rows = n;
  const columns = n;
  let rowHigh = rows - 1;
  let rowLow = 0;
  let colHigh = columns - 1;
  let colLow = 0;
  let count = 0;
  let phase = 0;

  while (count < rows * columns) {
    if (phase % 4 === 0) {
      let j = colLow;
      while (j <= colHigh) {
        count++;
        result[rowLow][j] = count;
        j++;
      }

      rowLow++;
    } else if (phase % 4 === 1) {
      let i = rowLow;

      while (i <= rowHigh) {
        count++;
        result[i][colHigh] = count;
        i++;
      }

      colHigh--;
    } else if (phase % 4 === 2) {
      let j = colHigh;

      while (j >= colLow) {
        count++;
        result[rowHigh][j] = count;
        j--;
      }

      rowHigh--;
    } else {
      let i = rowHigh;

      while (i >= rowLow) {
        count++;
        result[i][colLow] = count;
        i--;
      }

      colLow++;
    }

    phase++;
  }

  return result;
}
