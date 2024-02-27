function findDisappearedNumbers(nums) {
  const result = [];

  for (const num of nums) {
    const abs = Math.abs(num);

    if (nums[abs - 1] > 0) nums[abs - 1] = -1 * nums[abs - 1];
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) result.push(i + 1);
  }

  return result;
}

// https://www.youtube.com/watch?v=oEBHLcucDYg
/* In O(1) space and O(n) time.
By marking negative */
