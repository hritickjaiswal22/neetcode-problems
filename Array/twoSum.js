function twoSum(nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hash[num]) {
      hash[num].max = i;
    } else hash[num] = { min: i, max: i };
  }

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (hash[diff]) {
      if (hash[diff].min !== i) return [i, hash[diff].min];
      if (hash[diff].max !== i) return [i, hash[diff].max];
    }
  }

  return [-1, -1];
}
