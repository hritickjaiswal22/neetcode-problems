function spiralOrder(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let rowHigh = rows - 1;
  let rowLow = 0;
  let colHigh = columns - 1;
  let colLow = 0;
  let count = 0;
  let phase = 0;
  const result = [];

  while (count < rows * columns) {
    if (phase % 4 === 0) {
      let j = colLow;
      while (j <= colHigh) {
        count++;
        result.push(matrix[rowLow][j]);
        j++;
      }

      rowLow++;
    } else if (phase % 4 === 1) {
      let i = rowLow;

      while (i <= rowHigh) {
        count++;
        result.push(matrix[i][colHigh]);
        i++;
      }

      colHigh--;
    } else if (phase % 4 === 2) {
      let j = colHigh;

      while (j >= 0) {
        count++;
        result.push(matrix[rowHigh][j]);
        j--;
      }

      rowHigh--;
    } else {
      let i = rowHigh;

      while (i >= 0) {
        count++;
        result.push(matrix[i][colLow]);
        i--;
      }

      colLow++;
    }

    phase++;
  }

  return result;
}
