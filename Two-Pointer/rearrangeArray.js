function rearrangeArray(nums) {
  const positives = [];
  const negatives = [];
  let j = 0;
  let i = 0;

  for (const num of nums) {
    if (num < 0) negatives.push(num);
    else positives.push(num);
  }

  while (j < positives.length) {
    nums[i] = positives[j];
    i++;
    nums[i] = negatives[j];
    i++;
    j++;
  }

  return nums;
}
