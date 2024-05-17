// function maxProduct(nums) {
//   let result = Math.max(...nums);
//   let max = 1;
//   let min = 1;
//   let product = 1;

//   for (const num of nums) {
//     if (num === 0) {
//       product = 1;
//       max = 1;
//       min = 1;
//     } else {
//       product = product * num;

//       const temp = max;
//       max = Math.max(max, product, min * num);
//       min = Math.min(min, product, temp * num);

//       result = Math.max(result, max);
//     }
//   }

//   if (result === 1) {
//     let temp = 1;

//     for (const num of nums) {
//       temp = temp * num;

//       if (temp === 1) return 1;
//     }

//     return Math.max(...nums);
//   }
//   return result;
// }

function maxProduct(nums) {}

// 186 / 190 testcases passed using my soln of O(n^2)
