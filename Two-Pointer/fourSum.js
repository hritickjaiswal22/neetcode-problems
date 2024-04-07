function fourSum(nums, target) {
  const n = nums.length;
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 3; i++) {
    const temp1 = nums[i];

    for (let j = i + 1; j < n - 2; j++) {
      const temp2 = nums[j];
      let k = j + 1;
      let l = n - 1;

      while (k < l) {
        const temp3 = nums[k];
        const temp4 = nums[l];
        const sum = temp1 + temp2 + temp3 + temp4;

        if (sum === target) {
          result.push([temp1, temp2, temp3, temp4]);
          while (k < l && nums[k] === temp3) k++;
          while (k < l && nums[l] === temp4) l--;
        } else if (sum > target) l--;
        else k++;
      }

      while (j < n - 2 && nums[j] === temp2) j++;
      j--;
    }

    while (i < n - 3 && nums[i] === temp1) i++;
    i--;
  }

  return result;
}
