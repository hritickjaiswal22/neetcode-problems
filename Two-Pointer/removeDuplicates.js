function removeDuplicates(nums) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    const temp = nums[j];
    let k = j;

    nums[i] = temp;
    i++;

    while (k < nums.length && nums[k] === temp) k++;

    j = k - 1;
  }

  return i;
}
