// function rob(nums) {
//   function find(i, t, moneys) {
//     if (i >= moneys.length) return 0;
//     if (t[i] !== null) return t[i];

//     return (t[i] = Math.max(
//       moneys[i] + find(i + 2, t, moneys),
//       find(i + 1, t, moneys)
//     ));
//   }

//   const t = Array(nums.length + 1).fill(null);

//   return find(0, t, nums);
// }

function rob(nums) {
  // function find(i) {
  //   if (i >= nums.length) return 0;

  //   return Math.max(nums[i] + find(i + 2), find(i + 1));
  // }

  // return find(0);
  const n = nums.length;
  const t = Array(n + 4).fill(null);

  for (let i = n; i < t.length; i++) {
    t[i] = 0;
  }

  for (let i = n - 1; i >= 0; i--) {
    t[i] = Math.max(nums[i] + t[i + 2], t[i + 1]);
  }

  return t[0];
}
