function findTargetSumWays(nums, target) {
  function find(i, sum, nums, target) {
    if (i >= nums.length) {
      if (sum === target) return 1;
      return 0;
    }
    if (sum >= 0 && t[i][sum] !== null) return t[i][sum];

    const result =
      find(i + 1, sum + nums[i], nums, target) +
      find(i + 1, sum - nums[i], nums, target);

    if (sum >= 0) t[i][sum] = result;

    return result;
  }

  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);

  const t = Array(nums.length + 1)
    .fill()
    .map((_) => Array(totalSum + 1).fill(null));

  return find(0, 0, nums, target);
}
