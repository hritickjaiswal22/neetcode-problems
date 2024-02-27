function containsDuplicate(nums) {
  const hash = {};

  for (const num of nums) {
    if (hash[num]) return true;
    else hash[num] = true;
  }

  return false;
}
