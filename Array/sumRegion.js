// https://www.youtube.com/watch?v=tk0Twx2VQy8
// Very good explanation

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  this.sumMatrix = Array(n + 1)
    .fill()
    .map(() => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = 1; j <= m; j++) {
      sum += matrix[i - 1][j - 1];
      this.sumMatrix[i][j] = this.sumMatrix[i - 1][j] + sum;
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  row1++;
  col1++;
  row2++;
  col2++;

  return (
    this.sumMatrix[row2][col2] -
    this.sumMatrix[row1 - 1][col2] -
    this.sumMatrix[row2][col1 - 1] +
    this.sumMatrix[row1 - 1][col1 - 1]
  );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
