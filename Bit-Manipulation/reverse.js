function reverse(x) {
  if (x === 0) return 0;
  const isNegative = x < 0;
  const BOUND = 2 ** 31;
  const min = -BOUND;
  const max = BOUND - 1;
  let result = 0;

  x = Math.abs(x);

  while (x > 0) {
    const rem = x % 10;
    result = result * 10 + rem;

    if (isNegative && -1 * result < min) return 0;
    else if (result > max) return 0;

    x = Math.floor(x / 10);
  }

  if (isNegative) return -1 * result;
  return result;
}
