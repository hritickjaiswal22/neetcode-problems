function maxSubArray(nums) {
  let result = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (const num of nums) {
    sum += num;

    result = Math.max(result, sum);

    if (sum < 0) sum = 0;
  }

  return result;
}
