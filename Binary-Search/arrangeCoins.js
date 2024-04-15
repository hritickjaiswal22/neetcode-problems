function arrangeCoins(n) {
  let low = 1;
  let high = 2 ** 17;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const sum = (mid * (mid + 1)) / 2;

    if (sum === n) return mid;
    else if (sum > n) high = mid - 1;
    else low = mid + 1;
  }
}
