function generate(numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  const result = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    const temp = [1];
    const arr = result[result.length - 1];

    for (let j = 0; j < arr.length - 1; j++) {
      temp.push(arr[j] + arr[j + 1]);
    }

    temp.push(1);

    result.push(temp);
  }

  return result;
}
