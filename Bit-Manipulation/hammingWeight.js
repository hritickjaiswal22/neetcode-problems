function hammingWeight(n) {
  let result = 0;

  while (n > 0) {
    const rem = n % 2;
    if (rem) result++;
    n = Math.floor(n / 2);
  }

  return result;
}
