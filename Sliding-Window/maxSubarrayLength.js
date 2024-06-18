function maxSubarrayLength(nums, k) {
  const hash = {};
  let i = -1;
  let j = -1;
  let result = 0;

  while (j < nums.length - 1) {
    while (j < nums.length - 1) {
      j++;
      if (hash[nums[j]] !== undefined) hash[nums[j]]++;
      else hash[nums[j]] = 1;

      if (hash[nums[j]] > k) break;

      result = Math.max(result, j - i);
    }

    while (i < j) {
      i++;
      hash[nums[i]]--;

      if (hash[nums[i]] === k) break;
    }
  }

  return result;
}
