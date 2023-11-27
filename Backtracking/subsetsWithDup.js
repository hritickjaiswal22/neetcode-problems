function subsetsWithDup(nums) {
  function find(i, temp) {
    if (i >= nums.length) {
      hash[temp] = true;
      return;
    }

    find(i + 1, [...temp, nums[i]]);
    find(i + 1, temp);
  }

  const hash = {};

  find(0, []);

  return Object.keys(hash);
}
