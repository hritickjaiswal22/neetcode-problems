function removeElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) nums[i] = -1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== -1) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}