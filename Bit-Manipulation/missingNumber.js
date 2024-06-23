function missingNumber(nums) {
  const n = nums.length;
  let sum = 0;

  for (const num of nums) {
    sum += num;
  }

  return (n * (n + 1)) / 2 - sum;
}
