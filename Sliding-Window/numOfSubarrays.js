function numOfSubarrays(arr, k, threshold) {
  const n = arr.length;
  let sum = 0;
  let result = 0;

  if (n < k) return result;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  if (sum / k >= threshold) result++;

  for (let i = k; i < n; i++) {
    sum -= arr[i - k];

    sum += arr[i];

    if (sum / k >= threshold) result++;
  }

  return result;
}
