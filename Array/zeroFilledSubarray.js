function zeroFilledSubarray(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let j = i;
      let len = 0;

      while (j < nums.length && nums[j] === 0) {
        len++;
        result += len;
        j++;
      }

      i = j;
    }
  }

  return result;
}
