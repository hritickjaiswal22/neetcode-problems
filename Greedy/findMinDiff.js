class Solution {
  findMinDiff(arr, n, m) {
    let i = 0;
    let result = Number.MAX_SAFE_INTEGER;

    m = m - 1;
    arr.sort((a, b) => a - b);

    while (i + m < n) {
      result = Math.min(result, arr[i + i] - arr[i]);
      i++;
    }

    return result;
  }
}
