// function shipWithinDays(weights, days) {
//   let low = Math.max(...weights);
//   let high = weights.reduce((acc, val) => acc + val, 0);
//   let result = Number.MAX_SAFE_INTEGER;

//   while (low <= high) {
//     const mid = low + Math.floor((high - low) / 2);
//     const tempDays = getDays(weights, mid);

//     if (tempDays <= days && tempDays < result) result = tempDays;

//     if (tempDays <= days) high = mid - 1;
//     else low = mid + 1;
//   }

//   return result;
// }

// function getDays(weights, maxCapacity) {
//   let result = 1;
//   let sum = 0;

//   for (const weight of weights) {
//     sum += weight;

//     if (sum > maxCapacity) {
//       result++;
//       sum = weight;
//     }
//   }

//   return result;
// }

function shipWithinDays(weights, days) {
  let low = Math.max(...weights);
  let high = 0;
  let result = Number.MAX_SAFE_INTEGER;

  weights.sort((a, b) => a - b);

  for (const weight of weights) {
    high += weight;
  }

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    const canShip = daysToShip(weights, mid) <= days;

    if (canShip) result = Math.min(result, mid);

    if (canShip) high = mid - 1;
    else low = mid + 1;
  }

  return result;
}

function daysToShip(weights, maxCapacity) {
  let days = 1;
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];

    if (sum > maxCapacity) {
      days++;
      sum = 0;
      i--;
    }
  }

  return days;
}
