function sampleStats(count) {
  let min = null;
  let max = null;
  let meanSum = 0;
  let sum = 0;
  let mode = -1;
  let maxFreq = 0;

  for (let i = 0; i < count.length; i++) {
    if (count[i] && min === null) min = i;

    if (count[i]) max = i;

    if (count[i] > maxFreq) {
      maxFreq = count[i];
      mode = i;
    }

    if (count[i]) {
      meanSum += i * count[i];
      sum += count[i];
    }
  }

  if (sum % 2 === 0) {
    let temp = 0;
    let mid = null;
    let midPlusOne = null;
    for (let i = 0; i < count.length; i++) {
      if (count[i]) {
        temp += count[i];
        if (temp >= sum / 2 + 1) {
          midPlusOne = i;
          if (mid === null) mid = i;
          break;
        }
        if (temp === sum / 2) mid = i;
      }
    }
    return [min, max, meanSum / sum, (mid + midPlusOne) / 2, mode];
  } else {
    let temp = 0;
    let midPlusOne = null;
    for (let i = 0; i < count.length; i++) {
      if (count[i]) {
        temp += count[i];
        if (temp > sum / 2) {
          midPlusOne = i;
          return [min, max, meanSum / sum, midPlusOne, mode];
        }
      }
    }
  }

  return [min, max, meanSum / sum, "", mode];
}
