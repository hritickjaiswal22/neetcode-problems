function combinationSum4(nums, target) {
  function find(target, t, nums) {
    if (target === 0) return 1;
    if (target < 0) return 0;
    if (t[target] !== null) return t[target];

    let sum = 0;

    for (const num of nums) {
      sum += find(target - num, t, nums);
    }

    return (t[target] = sum);
  }

  const t = Array(target + 1).fill(null);

  return find(target, t, nums);
}
