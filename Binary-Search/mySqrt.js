function mySqrt(num) {
  if (num === 0) return 0;
  if (num <= 3) return 1;

  let low = 1;
  let high = Math.ceil(num / 2);

  while (true) {
    const mid = (low + high) / 2;

    const diff = num - mid * mid;

    if (Math.abs(diff) < 0.01) return Math.floor(mid);
    else if (diff < 0) low = mid + 1;
    else high = mid - 1;
  }
}
