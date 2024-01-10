function convert(s, numRows) {
  if (numRows >= s.length || numRows === 1) return s;

  const arr = Array(numRows).fill("");
  let row = 0;
  let isIncreasing = true;
  let result = "";

  for (const char of s) {
    let temp = arr[row];
    temp += char;
    arr[row] = temp;

    if (isIncreasing) row++;
    else row--;

    if (row >= numRows) {
      row = row - 2;
      isIncreasing = false;
    }

    if (row < 0) {
      row = row + 2;
      isIncreasing = true;
    }
  }

  for (const str of arr) {
    result = result + str;
  }

  return result;
}
