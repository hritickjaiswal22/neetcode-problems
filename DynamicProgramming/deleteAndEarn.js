function deleteAndEarn(nums) {
  function find(i) {
    if (i >= combined.length) return 0;
    if (t[i] !== null) return t[i];

    let left = 0;
    let right = 0;

    left = combined[i].sum;

    if (combined[i + 1] && combined[i + 1].val === combined[i].val + 1)
      left += find(i + 2);
    else left += find(i + 1);

    right = find(i + 1);

    return (t[i] = Math.max(left, right));
  }

  const hash = {};
  const combined = [];

  for (const num of nums) {
    if (hash[num]) hash[num] += num;
    else hash[num] = num;
  }

  for (let i = 0; i < Object.keys(hash).length; i++) {
    const val = Number(Object.keys(hash)[i]);
    const sum = Object.values(hash)[i];

    combined.push({
      val,
      sum,
    });
  }

  const t = Array(combined.length + 1).fill(null);

  return find(0);
}
