function findPeakElement(nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (isLeftMax(nums, mid) && isRightMax(nums, mid)) return mid;

    if (mid === nums.length - 1 || nums[mid - 1] > nums[mid]) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
}

function isLeftMax(nums, i) {
  if (i === 0 || nums[i] > nums[i - 1]) return true;
  return false;
}

function isRightMax(nums, i) {
  if (i === nums.length - 1 || nums[i] > nums[i + 1]) return true;
  return false;
}
