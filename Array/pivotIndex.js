function pivotIndex(nums) {
  const suffixArr = Array(nums.length).fill(0);

  let sum = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    suffixArr[i] = sum;

    sum += nums[i];
  }

  sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum === suffixArr[i]) return i;

    sum += nums[i];
  }

  return -1;
}
