function isMonotonic(nums) {
  let state = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (state === 0) {
      if (nums[i + 1] > nums[i]) state = 1;
      if (nums[i + 1] < nums[i]) state = -1;
    } else if (state === 1) {
      if (nums[i + 1] < nums[i]) return false;
    } else {
      if (nums[i + 1] > nums[i]) return false;
    }
  }

  return true;
}
