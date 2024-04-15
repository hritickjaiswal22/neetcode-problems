// // TRYAGAIN

// function maxFrequency(nums, k) {
//   nums.sort((a, b) => a - b);
//   let i = 0;
//   let j = 0;
//   let result = 0;
//   const prefix = [];
//   let sum = 0;

//   for (const num of nums) {
//     sum += num;

//     prefix.push(sum);
//   }

//   while (j < nums.length) {
//     while (j < nums.length) {
//       if (
//         prefix[j] - (i - 1 >= 0 ? prefix[i - 1] : 0) + k <
//         nums[j] * (j - i + 1)
//       )
//         break;

//       result = Math.max(result, j - i + 1);
//       j++;
//     }

//     while (j < nums.length && i <= j) {
//       if (
//         prefix[j] - (i - 1 >= 0 ? prefix[i - 1] : 0) + k >=
//         nums[j] * (j - i + 1)
//       )
//         break;

//       i++;
//     }
//   }

//   return result;
// }

// Did it own own !!!

function maxFrequency(nums, k) {
  let sum = 0;
  const prefix = [];
  const n = nums.length;
  let i = 0;
  let j = 1;
  let result = 1;

  nums.sort((a, b) => a - b);

  for (const num of nums) {
    sum += num;
    prefix.push(sum);
  }

  while (j < n) {
    result = Math.max(result, j - i + 1);

    const requiredSum = (j - i) * nums[j];
    const currentSum = prefix[j - 1] - (i - 1 >= 0 ? prefix[i - 1] : 0);

    if (currentSum + k >= requiredSum) j++;
    else i++;

    if (i === j) j++;
  }

  return result;
}
