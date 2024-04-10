function maxProfit(prices) {
  let min = prices[0];
  let result = 0;

  for (const price of prices) {
    if (price < min) {
      min = price;
    }
    result = Math.max(result, price - min);
  }

  return result;
}
