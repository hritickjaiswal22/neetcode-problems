// DID IT ON MY OWN

function leastBricks(wall) {
  const n = wall.length;
  const hash = {};
  let totalSum = 0;
  let max = 0;

  for (const val of wall[0]) {
    totalSum += val;
  }

  for (let i = 0; i < n; i++) {
    const arr = wall[i];
    let sum = 0;

    for (const val of arr) {
      sum += val;

      if (sum === totalSum) break;

      if (hash[sum]) hash[sum]++;
      else hash[sum] = 1;
    }
  }

  for (const val of Object.values(hash)) {
    max = Math.max(max, val);
  }

  return n - max;
}

// 72 / 87 testcases passed
// [
//   [100000000, 100000000],
//   [100000000, 100000000],
// ];
