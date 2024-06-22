function findErrorNums(nums) {
  nums.unshift(0);
  let repeatedNum = 0;
  let sum = 0;
  const n = nums.length - 1;
  const originalSum = (n * (n + 1)) / 2;

  for (let i = 1; i < nums.length; i++) {
    const index = Math.abs(nums[i]);
    sum += index;

    nums[index] = -1 * nums[index];
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      let freq = 0;
      for (let j = 1; j < nums.length; j++) {
        if (nums[j] === nums[i]) freq++;

        if (freq === 2) break;
      }

      if (freq === 2) {
        repeatedNum = nums[i];
        break;
      }
    }
  }

  const x = originalSum + repeatedNum - sum;

  return [repeatedNum, x];
  // S -pos +x = originalSum
}
