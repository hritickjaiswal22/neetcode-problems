// function majorityElement(nums) {
//   let result = nums[0];
//   let count = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (result === nums[i]) count++;
//     else count--;

//     if (count === 0) {
//       count = 1;
//       result = nums[i];
//     }
//   }

//   return result;
// }

function majorityElement(nums) {
  let result = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === result) count++;
    else count--;

    if (count === 0) {
      result = nums[i];
      count = 1;
    }
  }

  count = 0;

  for (const num of nums) {
    if (num === result) count++;
  }

  if (count > Math.floor(nums.length / 2)) return result;
  return -1;
}
