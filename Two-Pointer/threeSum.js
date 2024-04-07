function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    const temp1 = nums[i];
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const temp2 = nums[j];
      const temp3 = nums[k];
      const sum = temp1 + temp2 + temp3;

      if (sum === 0) {
        result.push([temp1, temp2, temp3]);
        while (j < k && nums[j] === temp2) j++;
        while (j < k && nums[k] === temp3) k--;
      } else if (sum > 0) k--;
      else j++;
    }

    while (i < nums.length - 2 && nums[i] === temp1) i++;
    i--;
  }

  return result;
}
