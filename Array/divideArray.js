function divideArray(nums, k) {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 3) {
    const temp = [];

    for (let j = i; j < i + 3; j++) {
      temp.push(nums[j]);
    }

    if (temp[2] - temp[0] > k) return [];

    result.push(temp);
  }

  return result;
}
