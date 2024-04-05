// function twoSum(nums, target) {
//   const hash = {};

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (hash[num]) {
//       hash[num].max = i;
//     } else hash[num] = { min: i, max: i };
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];

//     if (hash[diff]) {
//       if (hash[diff].min !== i) return [i, hash[diff].min];
//       if (hash[diff].max !== i) return [i, hash[diff].max];
//     }
//   }

//   return [-1, -1];
// }

function twoSum(nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (hash[num]) hash[num].add(i);
    else {
      hash[num] = new Set();
      hash[num].add(i);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    const set = hash[diff];

    if (set) {
      for (const index of set) {
        if (index !== i) return [i, index];
      }
    }
  }

  return [];
}
