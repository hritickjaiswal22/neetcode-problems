function maxProfit(prices) {
  function find(i, canBuy) {
    if (i >= prices.length) return 0;
    if (t[i][canBuy] !== null) return t[i][canBuy];

    if (canBuy) {
      return (t[i][canBuy] = Math.max(
        -1 * prices[i] + find(i + 1, 0),
        find(i + 1, canBuy)
      ));
    } else {
      return (t[i][canBuy] = Math.max(
        prices[i] + find(i + 1, 1),
        find(i + 1, canBuy)
      ));
    }
  }

  const t = Array(prices.length + 2)
    .fill()
    .map(() => Array(3).fill(null));

  return find(0, 1);
}
