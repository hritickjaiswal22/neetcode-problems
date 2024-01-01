function minCostClimbingStairs(cost) {
  function find(i, t, costs) {
    if (i >= costs.length) return 0;
    if (t[i] !== null) return t[i];

    return (t[i] =
      costs[i] + Math.min(find(i + 1, t, costs), find(i + 2, t, costs)));
  }

  const t = Array(cost.length + 1).fill(null);

  return Math.min(find(0, t, cost), find(1, t, cost));
}
