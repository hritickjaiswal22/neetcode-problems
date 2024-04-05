// // DID IT IN 1 GO !!!!

// function checkSubarraySum(nums, k) {
//   const hash = {};
//   hash[0] = -1;

//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];

//     const rem = sum % k;

//     if (hash[rem] !== undefined && i - hash[rem] >= 2) return true;
//     else if (hash[rem] === undefined) hash[rem] = i;
//   }

//   return false;
// }

function checkSubarraySum(nums, k) {
  const hash = {};
  let sum = 0;

  hash[0] = -1;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const rem = sum % k;

    if (hash[rem] === undefined) hash[rem] = i;
    else {
      if (i - hash[rem] >= 2) return true;
    }
  }

  return false;
}
