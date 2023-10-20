function singleNonDuplicate(nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1])
      return nums[mid];
    if (nums[mid] !== nums[mid + 1]) mid += 1;

    if ((mid - low) % 2 === 0) high = mid;
    else low = mid + 1;
  }

  return -1;
}
