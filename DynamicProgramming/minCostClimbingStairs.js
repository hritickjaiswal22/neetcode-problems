// function minCostClimbingStairs(cost) {
//   function find(i, t, costs) {
//     if (i >= costs.length) return 0;
//     if (t[i] !== null) return t[i];

//     return (t[i] =
//       costs[i] + Math.min(find(i + 1, t, costs), find(i + 2, t, costs)));
//   }

//   const t = Array(cost.length + 1).fill(null);

//   return Math.min(find(0, t, cost), find(1, t, cost));
// }

function minCostClimbingStairs(cost) {
  // function find(i) {
  //   if (i >= cost.length) return 0;
  //   if (t[i] !== null) return t[i];
  //   return (t[i] = cost[i] + Math.min(find(i + 1), find(i + 2)));
  // }
  // const t = Array(cost.length + 2).fill(null);
  // return Math.min(find(0), find(1));

  const n = cost.length;
  const t = Array(n + 2).fill(null);

  t[n] = 0;
  t[n + 1] = 0;

  for (let i = n - 1; i >= 0; i--) {
    t[i] = cost[i] + Math.min(t[i + 1], t[i + 2]);
  }

  return Math.min(t[0], t[1]);
}
