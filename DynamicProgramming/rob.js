function rob(nums) {
  function find(i, t, moneys) {
    if (i >= moneys.length) return 0;
    if (t[i] !== null) return t[i];

    return (t[i] = Math.max(
      moneys[i] + find(i + 2, t, moneys),
      find(i + 1, t, moneys)
    ));
  }

  const t = Array(nums.length + 1).fill(null);

  return find(0, t, nums);
}
