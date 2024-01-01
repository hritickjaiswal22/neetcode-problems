function canPartition(nums) {
  function find(i, sum, t, totalSum, nums) {
    if (sum === totalSum - sum) return true;
    if (i >= nums.length) return false;
    if (t[i][sum] !== null) return t[i][sum];

    return (t[i][sum] =
      find(i + 1, sum + nums[i], t, totalSum, nums) ||
      find(i + 1, sum, t, totalSum, nums));
  }

  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);

  const t = Array(nums.length + 1)
    .fill()
    .map((_) => Array(totalSum + 1).fill(null));

  return find(0, 0, t, totalSum, nums);
}
