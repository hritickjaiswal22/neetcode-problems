function longestMountain(arr) {
  const n = arr.length;
  let result = 0;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] > arr[i]) {
      let j = i + 1;

      while (j < n && arr[j] > arr[j - 1]) j++;

      let highIndex = j - 1;
      let flag = false;

      while (j < n && arr[j] < arr[j - 1]) {
        flag = true;
        j++;
      }

      if (flag) {
        result = Math.max(result, j - i);
      }
      i = j - 2;
    }
  }

  return result;
}
