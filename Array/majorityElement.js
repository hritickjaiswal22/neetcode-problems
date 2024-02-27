function majorityElement(nums) {
  let result = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (result === nums[i]) count++;
    else count--;

    if (count === 0) {
      count = 1;
      result = nums[i];
    }
  }

  return result;
}
