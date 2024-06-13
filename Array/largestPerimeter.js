function largestPerimeter(nums) {
  let sum = 0;

  nums.sort((a, b) => a - b);

  for (const num of nums) {
    sum += num;
  }

  for (let i = nums.length - 1; i >= 2; i--) {
    sum = sum - nums[i];

    if (sum > nums[i]) return sum + nums[i];
  }

  return -1;
}
