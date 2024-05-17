// function maxAlternatingSum(nums) {
//   function find(i, len, nums) {
//     if (i >= nums.length) return 0;
//     if (t[i][len] !== null) return t[i][len];

//     if (len & 1) {
//       return (t[i][len] = Math.max(
//         -nums[i] + find(i + 1, 0, nums),
//         find(i + 1, len, nums)
//       ));
//     } else {
//       return (t[i][len] = Math.max(
//         nums[i] + find(i + 1, 1, nums),
//         find(i + 1, len, nums)
//       ));
//     }
//   }

//   const t = Array(nums.length + 1)
//     .fill()
//     .map((_) => Array(2).fill(null));

//   return find(0, 0, nums);
// }

function maxAlternatingSum(nums) {
  function find(i, turn) {
    if (i >= n) return 0;
    if (t[i][turn] !== null) return t[i][turn];

    let result = find(i + 1, turn);

    if (turn === 0) result = Math.max(result, nums[i] + find(i + 1, 1));
    else result = Math.max(result, -1 * nums[i] + find(i + 1, 0));

    return (t[i][turn] = result);
  }

  const n = nums.length;
  const t = Array(n + 1)
    .fill()
    .map(() => Array(3).fill(null));

  return find(0, 0);
}
