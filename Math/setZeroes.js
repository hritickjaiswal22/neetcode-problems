function setZeroes(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  let isFirstRowEmpty = false;
  let isFirstColumnEmpty = false;

  for (let j = 0; j < m; j++) {
    if (matrix[0][j] === 0) {
      isFirstRowEmpty = true;
      break;
    }
  }

  for (let i = 0; i < n; i++) {
    if (matrix[i][0] === 0) {
      isFirstColumnEmpty = true;
      break;
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < n; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 0; j < m; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let j = 1; j < m; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 0; i < n; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  if (isFirstRowEmpty) {
    for (let j = 0; j < m; j++) {
      matrix[0][j] = 0;
    }
  }

  if (isFirstColumnEmpty) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
}
