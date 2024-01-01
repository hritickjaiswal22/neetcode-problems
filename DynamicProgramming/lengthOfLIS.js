function lengthOfLIS(nums) {
  function find(i, prevIndex, nums) {
    if (i >= nums.length) return 0;
    if (prevIndex >= 0 && t[i][prevIndex] !== null) return t[i][prevIndex];

    if (prevIndex < 0) {
      return Math.max(1 + find(i + 1, i, nums), find(i + 1, prevIndex, nums));
    } else {
      if (nums[i] > nums[prevIndex])
        return (t[i][prevIndex] = Math.max(
          1 + find(i + 1, i, nums),
          find(i + 1, prevIndex, nums)
        ));
      else return (t[i][prevIndex] = find(i + 1, prevIndex, nums));
    }
  }

  const t = Array(nums.length + 1)
    .fill()
    .map((_) => Array(nums.length + 1).fill(null));

  return find(0, -1, nums);
}
