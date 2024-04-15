function sortedSquares(nums) {
  const result = [];
  const n = nums.length;
  let positiveStart = -1;
  let negativeEnd = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      positiveStart = i;
      break;
    }
  }

  if (positiveStart === 0) {
    negativeEnd = -1;
  } else if (positiveStart === -1) {
    negativeEnd = n - 1;
    positiveStart = n;
  } else negativeEnd = positiveStart - 1;

  while (negativeEnd >= 0 && positiveStart < n) {
    const sqrd1 = nums[negativeEnd] * nums[negativeEnd];
    const sqrd2 = nums[positiveStart] * nums[positiveStart];

    if (sqrd1 <= sqrd2) {
      result.push(sqrd1);
      negativeEnd--;
    } else {
      result.push(sqrd2);
      positiveStart++;
    }
  }

  while (negativeEnd >= 0) {
    const sqrd = nums[negativeEnd] * nums[negativeEnd];

    result.push(sqrd);
    negativeEnd--;
  }

  while (positiveStart < n) {
    const sqrd = nums[positiveStart] * nums[positiveStart];

    result.push(sqrd);
    positiveStart++;
  }

  return result;
}
