function subsets(nums) {
  function find(i, temp, result) {
    if (i >= nums.length) {
      result.push(temp);
      return;
    }

    find(i + 1, temp, result);
    find(i + 1, [...temp, nums[i]], result);
  }

  const result = [];

  find(0, [], result);

  return result;
}
