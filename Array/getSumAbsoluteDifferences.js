function getSumAbsoluteDifferences(nums) {
  let totalSum = 0;
  let leftSum = 0;
  const result = [];
  const n = nums.length;

  for (const num of nums) {
    totalSum += num;
  }

  for (let i = 0; i < n; i++) {
    const leftDiff = i * nums[i] - leftSum;
    leftSum += nums[i];
    const rightSum = totalSum - leftSum;
    result.push(leftDiff + rightSum - (n - (i + 1)) * nums[i]);
  }

  return result;
}
