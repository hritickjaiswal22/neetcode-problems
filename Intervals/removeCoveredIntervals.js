function removeCoveredIntervals(intervals) {
  let result = 0;
  let prev = 0;

  intervals.sort((a, b) => {
    if (a[0] <= b[0]) return -100;
    if (b[0] < a[0]) return 100;
  });

  for (let i = 1; i < intervals.length; i++) {
    if (isCovered(intervals[prev], intervals[i])) result++;
    else prev = i;
  }

  return intervals.length - result;
}

function isCovered(rangeA, rangeB) {
  return rangeB[0] >= rangeA[0] && rangeB[1] <= rangeA[1];
}
