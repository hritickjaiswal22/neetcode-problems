// function canPartition(nums) {
//   function find(i, sum, t, totalSum, nums) {
//     if (sum === totalSum - sum) return true;
//     if (i >= nums.length) return false;
//     if (t[i][sum] !== null) return t[i][sum];

//     return (t[i][sum] =
//       find(i + 1, sum + nums[i], t, totalSum, nums) ||
//       find(i + 1, sum, t, totalSum, nums));
//   }

//   const totalSum = nums.reduce((acc, cur) => acc + cur, 0);

//   const t = Array(nums.length + 1)
//     .fill()
//     .map((_) => Array(totalSum + 1).fill(null));

//   return find(0, 0, t, totalSum, nums);
// }

function canPartition(nums) {
  function find(i, sum) {
    if (sum === 0) return true;
    if (i >= n) return false;
    if (t[i][sum] !== null) return t[i][sum];

    let result = false;
    if (sum >= nums[i]) result = result || find(i + 1, sum - nums[i]);
    result = result || find(i + 1, sum);

    return (t[i][sum] = result);
  }

  let totalSum = 0;
  const n = nums.length;

  for (const num of nums) {
    totalSum += num;
  }

  if (totalSum % 2 !== 0) return false;

  const halfSum = totalSum / 2;
  const t = Array(n + 2)
    .fill()
    .map((_) => Array(halfSum + 2).fill(null));

  return find(0, totalSum / 2);
}
