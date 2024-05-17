// function coinChange(coins, amount) {
//   function find(i, amount, coins) {
//     if (amount === 0) return 0;
//     if (i >= coins.length) return Infinity;
//     if (t[i][amount] !== null) return t[i][amount];

//     if (coins[i] <= amount)
//       return (t[i][amount] = Math.min(
//         find(i + 1, amount, coins),
//         1 + find(i, amount - coins[i], coins)
//       ));
//     return (t[i][amount] = find(i + 1, amount, coins));
//   }

//   const t = Array(coins.length + 1)
//     .fill()
//     .map((_) => Array(amount + 1).fill(null));

//   const result = find(0, amount, coins);

//   if (result === Infinity) return -1;
//   return result;
// }

function coinChange(coins, amount) {
  // function find(val) {
  //   if (val === 0) return 0;
  //   if (t[val] !== null) return t[val];
  //   let result = Number.MAX_SAFE_INTEGER;
  //   for (const coin of coins) {
  //     if (val >= coin) result = Math.min(result, 1 + find(val - coin));
  //   }
  //   return (t[val] = result);
  // }
  // const t = Array(amount + 2).fill(null);
  // const result = find(amount);
  // if (result === Number.MAX_SAFE_INTEGER) return -1;
  // return result;

  const t = Array(amount + 2).fill(null);

  t[0] = 0;

  for (let i = 1; i <= amount; i++) {
    let result = Number.MAX_SAFE_INTEGER;

    for (const coin of coins) {
      if (i >= coin) result = Math.min(result, 1 + t[i - coin]);
    }

    t[i] = result;
  }

  const result = t[amount];

  if (result === Number.MAX_SAFE_INTEGER) return -1;
  return result;
}
