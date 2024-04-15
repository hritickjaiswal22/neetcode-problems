function minimizeMax(nums, p) {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  let low = 0;
  let high = nums[n - 1] - nums[0];
  let result = high;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    const isPossible = findPairsCount(nums, mid) >= p;

    if (isPossible) result = Math.min(result, mid);

    if (isPossible) high = mid - 1;
    else low = mid + 1;
  }

  return result;
}

function findPairsCount(nums, maxDiff) {
  let result = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] <= maxDiff) result++;
  }

  return result;
}
