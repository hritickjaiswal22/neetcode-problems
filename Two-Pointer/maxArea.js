function maxArea(height) {
  let result = 0;
  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    const temp = Math.min(height[i], height[j]);

    result = Math.max(result, temp * (j - i));

    if (height[i] < height[j]) i++;
    else j--;
  }

  return result;
}
