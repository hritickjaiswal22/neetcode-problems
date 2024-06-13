function numIdenticalPairs(nums) {
  const hash = {};
  let result = 0;

  for (const num of nums) {
    if (hash[num]) hash[num]++;
    else hash[num] = 1;
  }

  for (const value of Object.values(hash)) {
    result += (value * (value - 1)) / 2;
  }

  return result;
}
