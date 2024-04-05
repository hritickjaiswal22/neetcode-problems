// function pivotIndex(nums) {
//   const suffixArr = Array(nums.length).fill(0);

//   let sum = 0;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     suffixArr[i] = sum;

//     sum += nums[i];
//   }

//   sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (sum === suffixArr[i]) return i;

//     sum += nums[i];
//   }

//   return -1;
// }

function pivotIndex(nums) {
  let leftSum = 0;
  let rightSum = 0;

  for (const num of nums) {
    rightSum += num;
  }

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];

    if (rightSum === leftSum) return i;

    leftSum += nums[i];
  }

  return -1;
}
