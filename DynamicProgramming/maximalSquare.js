// function maximalSquare(matrix) {
//   const m = matrix.length;
//   const n = matrix[0].length;

//   const t = Array(m)
//     .fill()
//     .map((_) => Array(n).fill(0));

//   for (let i = 0; i < m; i++) {
//     if (matrix[i][0] == 1) t[i][0] = 1;
//   }

//   for (let j = 0; j < n; j++) {
//     if (matrix[0][j] == 1) t[0][j] = 1;
//   }

//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       if (matrix[i][j] == 1) {
//         if (
//           matrix[i - 1][j - 1] == 1 &&
//           matrix[i - 1][j] == 1 &&
//           matrix[i][j - 1] == 1
//         )
//           t[i][j] = 1 + Math.min(t[i - 1][j - 1], t[i - 1][j], t[i][j - 1]);
//         else t[i][j] = 1;
//       } else t[i][j] = 0;
//     }
//   }

//   console.log(t);

//   let result = 0;

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       result = Math.max(result, t[i][j] * t[i][j]);
//     }
//   }

//   return result;
// }

function maximalSquare(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  let result = 0;

  const t = Array(n)
    .fill()
    .map(() => Array(m).fill(0));

  for (let j = 0; j < m; j++) {
    t[0][j] = Number(matrix[0][j]);
    result = Math.max(result, t[0][j]);
  }

  for (let i = 0; i < n; i++) {
    t[i][0] = Number(matrix[i][0]);
    result = Math.max(result, t[i][0]);
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] === "1")
        t[i][j] = Math.min(t[i - 1][j - 1], t[i - 1][j], t[i][j - 1]) + 1;
      else t[i][j] = 0;

      result = Math.max(result, t[i][j]);
    }
  }

  return result * result;
}
