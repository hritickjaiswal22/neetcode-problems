function change(amount, coins) {
  function find(i, amount, t, coins) {
    if (amount === 0) return 1;
    if (i >= coins.length || amount < 0) return 0;
    if (t[i][amount] !== null) return t[i][amount];

    if (amount >= coins[i])
      return (t[i][amount] =
        find(i, amount - coins[i], t, coins) + find(i + 1, amount, t, coins));
    return 0;
  }

  coins.sort((a, b) => a - b);

  const t = Array(coins.length + 1)
    .fill()
    .map((_) => Array(amount + 1).fill(null));

  return find(0, amount, t, coins);
}
