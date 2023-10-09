function findPairs(nums, k) {
  let result = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i] - k;
    const b = nums[i] + k;
    let j = i;

    if (k === 0 && nums[i] === nums[i + 1]) result += 2;

    if (k !== 0) {
      if (binarySearch(nums, a)) result++;
      if (binarySearch(nums, b)) result++;
    }

    while (j < nums.length && nums[j] === nums[i]) j++;

    i = j - 1;
  }

  return result / 2;
}

function binarySearch(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target) return true;
    else if (target > nums[mid]) low = mid + 1;
    else high = mid - 1;
  }

  return false;
}
