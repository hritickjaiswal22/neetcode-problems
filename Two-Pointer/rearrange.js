// Couldn't solve it on my own !!!
// https://www.youtube.com/watch?v=zWj5pv1PSug
function rearrangeArray(nums) {
  const n = nums.length;
  const result = Array(n).fill(-1);
  let i = 0;
  let j = 1;

  nums.sort((a, b) => a - b);

  for (let k = 0; k < n; k++) {
    if (k < Math.floor((n + 1) / 2)) {
      result[i] = nums[k];
      i += 2;
    } else {
      result[j] = nums[k];
      j += 2;
    }
  }

  return result;
}
