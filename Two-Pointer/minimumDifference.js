function minimumDifference(nums, k) {
  let result = Number.MAX_SAFE_INTEGER;
  const n = nums.length;

  if (n < k) return 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i + k - 1 < n; i++) {
    result = Math.min(result, nums[i + k - 1] - nums[i]);
  }

  return result;
}
