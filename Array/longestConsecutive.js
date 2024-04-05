function longestConsecutive(nums) {
  const hash = {};
  let result = 0;

  for (const num of nums) {
    hash[num] = true;
  }

  for (const num of nums) {
    if (hash[num - 1]) hash[num] = false;
  }

  for (const key of Object.keys(hash)) {
    if (hash[key]) {
      let temp = 0;
      let num = Number(key);

      while (hash[num] !== undefined) {
        temp++;
        num++;
      }

      result = Math.max(result, temp);
    }
  }

  return result;
}
