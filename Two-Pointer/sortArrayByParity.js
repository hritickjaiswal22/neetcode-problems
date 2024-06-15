function sortArrayByParity(nums) {
  let j = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] % 2 === 0) {
      swap(i, j, nums);
      j++;
    }
    i++;
  }

  return nums;
}

function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
