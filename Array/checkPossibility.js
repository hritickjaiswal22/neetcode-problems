function checkPossibility(nums) {
  let flag = true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (!flag && nums[i + 1] < nums[i]) return false;
    if (nums[i + 1] < nums[i]) {
      if (i - 1 < 0 || nums[i + 1] >= nums[i - 1]) {
        flag = false;
      } else if (i + 2 >= nums.length || min[i + 2] >= nums[i]) {
        flag = false;
      } else return false;
    }
  }

  return true;
}
