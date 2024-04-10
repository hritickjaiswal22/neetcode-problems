// Watched the solution
function numSubseq(nums, target) {
  let i = 0;
  let j = nums.length - 1;
  let result = 0;
  const mod = 10 ** 9 + 7;

  nums.sort((a, b) => a - b);

  while (i <= j) {
    const sum = nums[i] + nums[j];

    if (sum <= target) {
      if (i === j) result++;
      else result += 2 ** (j - i);
      i++;
    } else j--;

    result = result % mod;
  }

  return result;
}
