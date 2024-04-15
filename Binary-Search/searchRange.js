function searchRange(nums, target) {
  return [findStartIndex(nums, target), findEndIndex(nums, target)];
}

function findStartIndex(nums, target) {
  const n = nums.length;
  let low = 0;
  let high = n - 1;
  let resultIndex = n;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target && mid < resultIndex) resultIndex = mid;

    if (target <= nums[mid]) high = mid - 1;
    else low = mid + 1;
  }

  if (resultIndex === n) return -1;
  return resultIndex;
}

function findEndIndex(nums, target) {
  const n = nums.length;
  let low = 0;
  let high = n - 1;
  let resultIndex = -1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target && mid > resultIndex) resultIndex = mid;

    if (target >= nums[mid]) low = mid + 1;
    else high = mid - 1;
  }

  return resultIndex;
}
