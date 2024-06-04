function merge(intervals) {
  const result = [];

  intervals.sort((a, b) => {
    if (a[0] < b[0]) return -100;
    if (b[0] < a[0]) return 100;
    else {
      if (a[1] <= b[1]) return -100;
      if (b[1] < a[1]) return 100;
    }
  });

  for (const interval of intervals) {
    if (result.length && isOverlapping(result[result.length - 1], interval)) {
      result[result.length - 1][0] = Math.min(
        result[result.length - 1][0],
        interval[0]
      );
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1]
      );
    } else result.push(interval);
  }

  return result;
}

function isOverlapping(rangeA, rangeB) {
  return (
    (rangeA[1] >= rangeB[0] && rangeA[1] <= rangeB[1]) ||
    (rangeA[0] >= rangeB[0] && rangeA[1] <= rangeB[1]) ||
    (rangeB[0] >= rangeA[0] && rangeB[1] <= rangeA[1])
  );
}
