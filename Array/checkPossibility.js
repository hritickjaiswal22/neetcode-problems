// function checkPossibility(nums) {
//   let flag = true;

//   for (let i = 0; i < nums.length - 1; i++) {
//     if (!flag && nums[i + 1] < nums[i]) return false;
//     if (nums[i + 1] < nums[i]) {
//       if (i - 1 < 0 || nums[i + 1] >= nums[i - 1]) {
//         flag = false;
//       } else if (i + 2 >= nums.length || min[i + 2] >= nums[i]) {
//         flag = false;
//       } else return false;
//     }
//   }

//   return true;
// }

function checkPossibility(nums) {
  let flag = false;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (!flag) {
        flag = true;
        const min = Math.min(nums[i], nums[i - 1]);
        const max = Math.max(nums[i], nums[i - 1]);

        if (i - 2 < 0 || min >= nums[i - 2]) {
          nums[i] = min;
          nums[i - 1] = min;
        } else if (i + 1 >= nums.length || max <= nums[i + 1]) {
          nums[i] = max;
          nums[i - 1] = max;
        } else return false;
      } else return false;
    }
  }

  return true;
}
