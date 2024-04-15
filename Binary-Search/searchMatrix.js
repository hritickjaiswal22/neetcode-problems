// // DONT CONSIDER THE MATRIX AS MATRIX JUST CONSIDER IT AN ARRAY

// function searchMatrix(matrix, target) {
//   const rows = matrix.length;
//   const cols = matrix[0].length;
//   let low = 0;
//   let high = rows * cols - 1;

//   while (low <= high) {
//     const mid = low + Math.floor((high - low) / 2);

//     const rowNo = Math.floor(mid / cols);
//     const colNo = mid % cols;

//     if (matrix[rowNo][colNo] === target) return true;
//     else if (target < matrix[rowNo][colNo]) high = mid - 1;
//     else low = mid + 1;
//   }

//   return false;
// }

function searchMatrix(matrix, target) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let low = 0;
  let high = rows * columns - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    const rowIndex = Math.floor(mid / columns);
    const colIndex = mid % columns;

    if (matrix[rowIndex][colIndex] === target) return true;
    else if (target > matrix[rowIndex][colIndex]) low = mid + 1;
    else high = mid - 1;
  }

  return false;
}
