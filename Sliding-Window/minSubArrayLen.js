function minSubArrayLen(target, nums) {
  const n = nums.length;
  let i = -1;
  let j = 0;
  let sum = 0;
  let result = Number.MAX_SAFE_INTEGER;

  while (j < n) {
    while (j < n) {
      sum += nums[j];

      if (sum >= target) {
        result = Math.min(result, j - i);
        break;
      }

      j++;
    }

    while (i < j) {
      i++;
      sum -= nums[i];

      if (sum >= target) result = Math.min(result, j - i);

      if (sum < target) {
        j++;
        break;
      }
    }
  }

  if (result === Number.MAX_SAFE_INTEGER) return 0;
  return result;
}
