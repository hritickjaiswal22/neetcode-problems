function maxProfit(prices) {
  function find(i, prevIndex, t, prices) {
    if (i >= prices.length) return 0;
    if (t[i][prevIndex + 1] !== null) return t[i][prevIndex + 1];

    if (prevIndex >= 0) {
      return (t[i][prevIndex + 1] = Math.max(
        prices[i] + find(i + 2, -1, t, prices),
        find(i + 1, prevIndex, t, prices)
      ));
    } else {
      return (t[i][prevIndex + 1] = Math.max(
        -prices[i] + find(i + 1, 0, t, prices),
        find(i + 1, prevIndex, t, prices)
      ));
    }
  }

  const t = Array(prices.length + 1)
    .fill()
    .map((_) => Array(2).fill(null));

  return find(0, -1, t, prices);
}
