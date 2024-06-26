function maxSumAfterPartitioning(arr, k) {
  function find(i) {
    if (i >= n) return 0;
    if (t[i] !== null) return t[i];

    let max = arr[i];
    let result = Number.MIN_SAFE_INTEGER;

    for (let j = i; j < Math.min(n, i + k); j++) {
      max = Math.max(max, arr[j]);
      result = Math.max(result, (j - i + 1) * max + find(j + 1));
    }

    return (t[i] = result);
  }

  const n = arr.length;
  const t = Array(n + 4).fill(null);

  return find(0);
}
