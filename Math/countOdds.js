function countOdds(low, high) {
  const diff = Math.abs(high - low);
  const half = Math.floor(diff / 2);

  if (diff & 1) return half + 1;
  else {
    if (low & 1) return half + 1;
    return half;
  }
}
