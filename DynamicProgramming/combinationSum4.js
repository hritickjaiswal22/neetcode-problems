// function combinationSum4(nums, target) {
//   function find(target, t, nums) {
//     if (target === 0) return 1;
//     if (target < 0) return 0;
//     if (t[target] !== null) return t[target];

//     let sum = 0;

//     for (const num of nums) {
//       sum += find(target - num, t, nums);
//     }

//     return (t[target] = sum);
//   }

//   const t = Array(target + 1).fill(null);

//   return find(target, t, nums);
// }

function combinationSum4(nums, target) {
  // function find(sum) {
  //   if (sum === 0) return 1;
  //   if (t[sum] !== null) return t[sum];

  //   let result = 0;

  //   for (const num of nums) {
  //     if (sum >= num) result += find(sum - num);
  //   }

  //   return (t[sum] = result);
  // }

  // const t = Array(target + 2).fill(null);

  // return find(target);

  const t = Array(target + 2).fill(null);
  t[0] = 1;

  for (let sum = 1; sum < target + 2; sum++) {
    let result = 0;

    for (const num of nums) {
      if (sum >= num) result += t[sum - num];
    }

    t[sum] = result;
  }

  return t[target];
}
