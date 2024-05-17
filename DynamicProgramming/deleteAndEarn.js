function deleteAndEarn(nums) {
  function find(i, arr) {
    if (i >= arr.length) return 0;
    if (t[i] !== null) return t[i];

    let result = find(i + 1, arr);
    let nextIndex = i + 1;

    if (arr[nextIndex] === arr[i] + 1) nextIndex++;
    result = Math.max(result, arr[i] * hash[arr[i]] + find(nextIndex, arr));

    return (t[i] = result);
  }

  const hash = {};

  for (const num of nums) {
    if (hash[num]) hash[num]++;
    else hash[num] = 1;
  }

  const arr = Object.keys(hash)
    .map((str) => Number(str))
    .sort((a, b) => a - b);

  const t = Array(arr.length + 2).fill(null);

  return find(0, arr);
}
