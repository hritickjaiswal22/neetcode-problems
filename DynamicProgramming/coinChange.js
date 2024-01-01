function coinChange(coins, amount) {
  function find(i, amount, coins) {
    if (amount === 0) return 0;
    if (i >= coins.length) return Infinity;
    if (t[i][amount] !== null) return t[i][amount];

    if (coins[i] <= amount)
      return (t[i][amount] = Math.min(
        find(i + 1, amount, coins),
        1 + find(i, amount - coins[i], coins)
      ));
    return (t[i][amount] = find(i + 1, amount, coins));
  }

  const t = Array(coins.length + 1)
    .fill()
    .map((_) => Array(amount + 1).fill(null));

  const result = find(0, amount, coins);

  if (result === Infinity) return -1;
  return result;
}
