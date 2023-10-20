function findMin(nums) {
  let low = 0;
  let high = nums.length - 1;
  let result = nums[0];

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    result = Math.min(result, nums[mid]);

    if (nums[mid] < nums[low]) high = mid - 1;
    else if (nums[mid] > nums[high]) low = mid + 1;
    else low = mid - 1;
  }

  return result;
}
