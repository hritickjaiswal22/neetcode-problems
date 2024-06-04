function insert(intervals, newInterval) {
  let flag = false;
  const result = [];
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];

    if (newInterval[0] < interval[0]) {
      flag = true;
      intervals.splice(i, 0, newInterval);
      break;
    } else if (newInterval[0] === interval[0]) {
      flag = true;

      if (newInterval[1] <= interval[1]) intervals.splice(i, 0, newInterval);
      else intervals.splice(i + 1, 0, newInterval);

      break;
    }
  }
  if (!flag) intervals.push(newInterval);

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
