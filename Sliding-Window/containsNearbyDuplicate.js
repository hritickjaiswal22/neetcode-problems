function containsNearbyDuplicate(nums, k) {
  const hash = {};

  for (let i = 0; i <= Math.min(k, nums.length - 1); i++) {
    if (hash[nums[i]]) return true;
    else hash[nums[i]] = true;
  }

  for (let i = k + 1; i < nums.length; i++) {
    delete hash[nums[i - k - 1]];

    if (hash[nums[i]]) return true;
    else hash[nums[i]] = true;
  }

  return false;
}
