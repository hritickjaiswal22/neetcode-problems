// function maxProfit(prices) {
//   function find(i, prevIndex, t, prices) {
//     if (i >= prices.length) return 0;
//     if (t[i][prevIndex + 1] !== null) return t[i][prevIndex + 1];

//     if (prevIndex >= 0) {
//       return (t[i][prevIndex + 1] = Math.max(
//         prices[i] + find(i + 2, -1, t, prices),
//         find(i + 1, prevIndex, t, prices)
//       ));
//     } else {
//       return (t[i][prevIndex + 1] = Math.max(
//         -prices[i] + find(i + 1, 0, t, prices),
//         find(i + 1, prevIndex, t, prices)
//       ));
//     }
//   }

//   const t = Array(prices.length + 1)
//     .fill()
//     .map((_) => Array(2).fill(null));

//   return find(0, -1, t, prices);
// }

function maxProfit(prices) {
  function find(i, canSell) {
    if (i >= n) return 0;
    if (t[i][canSell] !== null) return t[i][canSell];

    if (canSell) {
      return (t[i][canSell] = Math.max(
        prices[i] + find(i + 2, 0),
        find(i + 1, canSell)
      ));
    } else {
      return (t[i][canSell] = Math.max(
        -1 * prices[i] + find(i + 1, 1),
        find(i + 1, canSell)
      ));
    }
  }

  const n = prices.length;
  const t = Array(n + 2)
    .fill()
    .map(() => Array(3).fill(null));

  return find(0, 0);
}
