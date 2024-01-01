function validPartition(nums) {
  function find(i, nums) {
    if (i >= nums.length) return true;
    if (t[i] !== null) return t[i];

    let result = false;

    if (nums[i] === nums[i + 1]) result = result || find(i + 2, nums);
    if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2])
      result = result || find(i + 3, nums);
    if (nums[i + 1] - nums[i] === 1 && nums[i + 2] - nums[i + 1] === 1)
      result = result || find(i + 3, nums);

    return (t[i] = result);
  }

  const t = Array(nums.length + 1).fill(null);

  return find(0, nums);
}
