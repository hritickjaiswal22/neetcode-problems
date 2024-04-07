function rotate(nums, k) {
  const n = nums.length;
  k = k % n;

  if (k === 0) return nums;

  const diff = n - k;

  reverse(0, n - 1, nums);
  reverse(0, k - 1, nums);
  reverse(k, n - 1, nums);

  return nums;
}

function reverse(i, j, nums) {
  while (i < j) {
    swap(i, j, nums);
    i++;
    j--;
  }
}

function swap(i, j, nums) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
