function diagonalSum(mat) {
  const n = mat.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    result += mat[i][i];
  }

  let i = 0;
  let j = n - 1;

  while (i < n && j >= 0) {
    result += mat[i][j];

    i++;
    j--;
  }

  if (n % 2) {
    result -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
  }

  return result;
}
