// function findTargetSumWays(nums, target) {
//   function find(i, sum, nums, target) {
//     if (i >= nums.length) {
//       if (sum === target) return 1;
//       return 0;
//     }
//     if (sum >= 0 && t[i][sum] !== null) return t[i][sum];

//     const result =
//       find(i + 1, sum + nums[i], nums, target) +
//       find(i + 1, sum - nums[i], nums, target);

//     if (sum >= 0) t[i][sum] = result;

//     return result;
//   }

//   const totalSum = nums.reduce((acc, cur) => acc + cur, 0);

//   const t = Array(nums.length + 1)
//     .fill()
//     .map((_) => Array(totalSum + 1).fill(null));

//   return find(0, 0, nums, target);
// }

function findTargetSumWays(nums, target) {
  function find(i, sum) {
    if (i >= n && sum === target) return 1;
    if (i >= n) return 0;

    const str = `${i}#${sum}`;
    if (map.has(str)) return map.get(str);

    const result = find(i + 1, sum - nums[i]) + find(i + 1, sum + nums[i]);

    map.set(str, result);

    return result;
  }

  const n = nums.length;
  const map = new Map();

  return find(0, 0);
}
