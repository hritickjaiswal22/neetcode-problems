function findNumberOfLIS(nums) {
  function compare(temp) {
    if (temp > max) {
      max = temp;
      result = 1;
    } else if (temp === max) {
      result++;
    }
  }

  function find(i, prevIndex) {
    if (i >= nums.length) return 0;
    if (t[i][prevIndex] !== null) {
      const temp = t[i][prevIndex];

      compare(temp);

      return temp;
    }

    if (nums[i] > nums[prevIndex]) {
      const temp = Math.max(1 + find(i + 1, i), find(i + 1, prevIndex));

      compare(temp);

      return (t[i][prevIndex] = temp);
    }

    const temp = find(i + 1, prevIndex);

    compare(temp);

    return (t[i][prevIndex] = temp);
  }

  nums.unshift(Number.MIN_SAFE_INTEGER);

  const t = Array(nums.length + 2)
    .fill()
    .map((_) => Array(nums.length + 2).fill(null));
  let max = Number.MIN_SAFE_INTEGER;
  let result = 1;

  find(1, 0);

  return result;
}
