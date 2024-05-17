// function validPartition(nums) {
//   function find(i, nums) {
//     if (i >= nums.length) return true;
//     if (t[i] !== null) return t[i];

//     let result = false;

//     if (nums[i] === nums[i + 1]) result = result || find(i + 2, nums);
//     if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2])
//       result = result || find(i + 3, nums);
//     if (nums[i + 1] - nums[i] === 1 && nums[i + 2] - nums[i + 1] === 1)
//       result = result || find(i + 3, nums);

//     return (t[i] = result);
//   }

//   const t = Array(nums.length + 1).fill(null);

//   return find(0, nums);
// }

function validPartition(nums) {
  function find(i) {
    if (i >= n) return true;
    if (t[i] !== null) return t[i];

    let result = false;

    if (nums[i] === nums[i + 1]) result = result || find(i + 2);
    if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2])
      result = result || find(i + 3);
    if (nums[i] === nums[i + 1] - 1 && nums[i + 1] === nums[i + 2] - 1)
      result = result || find(i + 3);

    return (t[i] = result);
  }

  const n = nums.length;
  const t = Array(n + 1).fill(null);

  return find(0);

  // t[n] = true;

  // for (let i = n; i >= 0; i--) {
  //   let result = false;

  //   if (nums[i] === nums[i + 1]) result = result || t[i + 2];
  //   if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2])
  //     result = result || t[i + 3];
  //   if (nums[i] === nums[i + 1] - 1 && nums[i + 1] === nums[i + 2] - 1)
  //     result = result || t[i + 3];

  //   t[i] = result;
  // }

  // return t[0];
}
