// function convert(s, numRows) {
//   if (numRows >= s.length || numRows === 1) return s;

//   const arr = Array(numRows).fill("");
//   let row = 0;
//   let isIncreasing = true;
//   let result = "";

//   for (const char of s) {
//     let temp = arr[row];
//     temp += char;
//     arr[row] = temp;

//     if (isIncreasing) row++;
//     else row--;

//     if (row >= numRows) {
//       row = row - 2;
//       isIncreasing = false;
//     }

//     if (row < 0) {
//       row = row + 2;
//       isIncreasing = true;
//     }
//   }

//   for (const str of arr) {
//     result = result + str;
//   }

//   return result;
// }

function convert(s, numRows) {
  if (numRows === 1) return s;

  const stringRows = Array(numRows).fill("");
  let row = 0;
  let increasing = true;

  for (let i = 0; i < s.length; i++) {
    stringRows[row] += s[i];

    if (increasing) row++;
    else row--;

    if (row >= numRows) {
      increasing = false;
      row = row - 2;
    }

    if (row < 0) {
      increasing = true;
      row = 1;
    }
  }

  return stringRows.reduce((acc, cur) => (acc = acc + cur), "");
}
