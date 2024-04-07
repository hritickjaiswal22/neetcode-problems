function trap(heights) {
  const n = heights.length;
  const leftMax = [];
  const rightMax = Array(n).fill(-1);
  let temp = -1;
  let result = 0;

  for (const height of heights) {
    leftMax.push(temp);
    temp = Math.max(temp, height);
  }

  temp = -1;

  for (let i = n - 1; i >= 0; i--) {
    rightMax[i] = temp;
    temp = Math.max(temp, heights[i]);
  }

  for (let i = 1; i < n - 1; i++) {
    const min = Math.min(leftMax[i], rightMax[i]);

    if (min > heights[i]) result += min - heights[i];
  }

  return result;
}
