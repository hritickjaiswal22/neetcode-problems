function findDuplicates(nums) {
  const result = new Set();

  nums.unshift(Number.MIN_SAFE_INTEGER);

  for (let i = 1; i < nums.length; i++) {
    const index = Math.abs(nums[i]);

    if (nums[index] < 0) result.add(index);
    else nums[index] = -1 * nums[index];
  }

  return [...result];
}
