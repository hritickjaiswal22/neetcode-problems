function findRadius(houses, heaters) {
  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);

  let low = 0;
  let high = houses[houses.length - 1];
  let result = Number.MAX_SAFE_INTEGER;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const truth = areAllHousesWarm(mid, houses, heaters);

    if (truth && mid < result) result = mid;
    if (!truth) low = mid + 1;
    else high = mid - 1;
  }

  return result;
}

function areAllHousesWarm(val, houses, heaters) {
  let i = 0;
  let j = 0;

  while (i < houses.length && j < heaters.length) {
    const low = heaters[j] - val;
    const high = heaters[j] + val;

    while (i < houses.length) {
      if (houses[i] >= low && houses[i] <= high) i++;
      else break;
    }

    j++;
  }

  if (i >= houses.length) return true;
  return false;
}

console.log(areAllHousesWarm(0, [1, 9], [3, 9]));
