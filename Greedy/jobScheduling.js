function jobScheduling(arr, n) {
  let jobsResult = 0;
  let profitResult = 0;
  let prevTime = -1;

  arr.sort((a, b) => b.profit - a.profit);

  for (const obj of arr) {
    const { dead, profit } = obj;

    if (dead > prevTime) {
      prevTime = dead;
      jobsResult++;
      profitResult += profit;
    }
  }

  return [jobsResult, profitResult];
}

// 17
// 1 3 288 2 2 435 3 10 401 4 16 368 5 16 248 6 1 361 7 11 108 8 10 167 9 5 251 10 3 170 11 14 156 12 6 184 13 4 370 14 5 424 15 8 397 16 5 375 17 5 218
