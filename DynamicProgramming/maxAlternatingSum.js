function maxAlternatingSum(nums) {
  function find(i, len, nums) {
    if (i >= nums.length) return 0;
    if (t[i][len] !== null) return t[i][len];

    if (len & 1) {
      return (t[i][len] = Math.max(
        -nums[i] + find(i + 1, 0, nums),
        find(i + 1, len, nums)
      ));
    } else {
      return (t[i][len] = Math.max(
        nums[i] + find(i + 1, 1, nums),
        find(i + 1, len, nums)
      ));
    }
  }

  const t = Array(nums.length + 1)
    .fill()
    .map((_) => Array(2).fill(null));

  return find(0, 0, nums);
}
