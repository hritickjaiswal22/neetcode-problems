function maxWidthOfVerticalArea(points) {
  let result = 0;

  points.sort((arr1, arr2) => arr1[0] - arr2[0]);

  for (let i = 0; i < points.length - 1; i++) {
    result = Math.max(result, points[i + 1][0] - points[i][0]);
  }

  return result;
}
