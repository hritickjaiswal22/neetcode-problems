function minEatingSpeed(piles, h) {
  let low = 1;
  let high = Math.max(...piles);
  let result = Number.MAX_SAFE_INTEGER;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    const canEatAll = hoursToEatAll(piles, mid) <= h;

    if (canEatAll) result = Math.min(result, mid);

    if (canEatAll) high = mid - 1;
    else low = mid + 1;
  }

  return result;
}

function hoursToEatAll(piles, k) {
  let hours = 0;

  for (const pile of piles) {
    hours += Math.floor(pile / k);
    if (pile % k) hours++;
  }

  return hours;
}
