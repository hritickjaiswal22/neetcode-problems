function countGoodStrings(low, high, zero, one) {
  function find(len) {
    if (len > high) return 0;
    if (t[len] !== null) return t[len];

    let inRangeVal = 0;
    if (len >= low && len <= high) inRangeVal = 1;

    const sum = inRangeVal + find(len + zero) + find(len + one);

    return (t[len] = sum % mod);
  }

  const t = Array(high + 2).fill(null);
  const mod = 10 ** 9 + 7;

  return find(0);
}
