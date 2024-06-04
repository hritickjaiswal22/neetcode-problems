function rotate(matrix) {
  const n = matrix.length;

  for (const arr of matrix) {
    reverse(arr);
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][n - i - 1];
      matrix[n - j - 1][n - i - 1] = temp;
    }
  }
}

function reverse(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }

  return arr;
}
