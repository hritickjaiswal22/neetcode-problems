function sortColors(nums) {
  let zeroPos = 0;
  let onePos = 0;
  let twoPos = nums.length - 1;

  while (onePos < twoPos) {
    if (nums[onePos] === 0) {
      swap(zeroPos, onePos, nums);
      zeroPos++;
      onePos++;
    } else if (nums[onePos] === 2) {
      swap(onePos, twoPos, nums);
      twoPos--;
    } else onePos++;
  }

  return nums;
}

function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
