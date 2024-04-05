// function findDisappearedNumbers(nums) {
//   const result = [];

//   for (const num of nums) {
//     const abs = Math.abs(num);

//     if (nums[abs - 1] > 0) nums[abs - 1] = -1 * nums[abs - 1];
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= 0) result.push(i + 1);
//   }

//   return result;
// }

// https://www.youtube.com/watch?v=oEBHLcucDYg
/* In O(1) space and O(n) time.
By marking negative */

function findDisappearedNumbers(nums) {
  const result = [];
  nums.unshift(-1);

  for (let i = 1; i < nums.length; i++) {
    const pos = Math.abs(nums[i]);

    nums[pos] = -1 * Math.abs(nums[pos]);
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= 0) result.push(i);
  }

  return result;
}
