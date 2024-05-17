// function lengthOfLIS(nums) {
//   function find(i, prevIndex, nums) {
//     if (i >= nums.length) return 0;
//     if (prevIndex >= 0 && t[i][prevIndex] !== null) return t[i][prevIndex];

//     if (prevIndex < 0) {
//       return Math.max(1 + find(i + 1, i, nums), find(i + 1, prevIndex, nums));
//     } else {
//       if (nums[i] > nums[prevIndex])
//         return (t[i][prevIndex] = Math.max(
//           1 + find(i + 1, i, nums),
//           find(i + 1, prevIndex, nums)
//         ));
//       else return (t[i][prevIndex] = find(i + 1, prevIndex, nums));
//     }
//   }

//   const t = Array(nums.length + 1)
//     .fill()
//     .map((_) => Array(nums.length + 1).fill(null));

//   return find(0, -1, nums);
// }

function lengthOfLIS(nums) {
  // function find(i, j) {
  //   if (i >= n) return 0;
  //   if (t[i][j] !== null) return t[i][j];

  //   if (nums[i] > nums[j])
  //     return (t[i][j] = Math.max(1 + find(i + 1, i), find(i + 1, j)));
  //   else return (t[i][j] = find(i + 1, j));
  // }

  nums.unshift(Number.MIN_SAFE_INTEGER);

  const n = nums.length;
  const t = Array(n + 2)
    .fill()
    .map((_) => Array(n + 2).fill(-1));

  for (let i = n; i < n + 2; i++) {
    for (let j = 0; j < n + 2; j++) {
      t[i][j] = 0;
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) t[i][j] = Math.max(1 + t[i + 1][i], t[i + 1][j]);
      else t[i][j] = t[i + 1][j];
    }
  }

  return t[1][0];
}
