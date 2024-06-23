function shuffle(nums, n) {
  for (let i = 0; i < n; i++) {
    const x = nums[i];
    const y = nums[n + i];
    let temp = x << 10;
    temp = temp | y;

    nums[i] = temp;
  }

  let j = 2 * n - 1;

  for (let i = n - 1; i >= 0; i--) {
    const xy = nums[i];
    const y = xy & (2 ** 10 - 1);
    const x = xy >> 10;

    nums[j] = y;
    j--;
    nums[j] = x;
    j--;
  }

  return nums;
}
