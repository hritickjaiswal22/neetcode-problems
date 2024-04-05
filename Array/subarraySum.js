function subarraySum(nums, k) {
  const hash = {};
  let sum = 0;
  let result = 0;

  hash[0] = 1;

  for (const num of nums) {
    sum += num;

    if (hash[sum - k]) result += hash[sum - k];

    if (hash[sum]) hash[sum]++;
    else hash[sum] = 1;
  }

  return result;
}
