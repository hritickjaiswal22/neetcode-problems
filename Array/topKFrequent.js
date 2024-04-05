function topKFrequent(nums, k) {
  const hash = {};
  const arr = [];
  const result = [];
  let i = 0;

  for (const num of nums) {
    if (hash[num]) hash[num]++;
    else hash[num] = 1;
  }

  for (const key of Object.keys(hash)) {
    arr.push({
      val: key,
      freq: hash[key],
    });
  }

  arr.sort((a, b) => b.freq - a.freq);

  while (k > 0 && i < arr.length) {
    result.push(arr[i].val);
    i++;
    k--;
  }

  return result;
}
