// function zeroFilledSubarray(nums) {
//   let result = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       let j = i;
//       let len = 0;

//       while (j < nums.length && nums[j] === 0) {
//         len++;
//         result += len;
//         j++;
//       }

//       i = j;
//     }
//   }

//   return result;
// }

function zeroFilledSubarray(nums) {
  const n = nums.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      let j = i;

      while (j < n && nums[j] === 0) j++;

      const temp = j - i;

      result += (temp * (temp + 1)) / 2;

      i = j - 1;
    }
  }

  return result;
}
