function mincostTickets(days, costs) {
  function find(i, days, costs) {
    if (i >= days.length) return 0;
    if (t[i] !== null) return t[i];

    let min = Number.MAX_SAFE_INTEGER;

    min = Math.min(min, costs[0] + find(i + 1, days, costs));

    const limit1 = days[i] + 6;
    let j = i;
    while (j < days.length && days[j] <= limit1) j++;
    min = Math.min(min, costs[1] + find(j, days, costs));

    const limit2 = days[i] + 29;
    j = i;
    while (j < days.length && days[j] <= limit2) j++;
    min = Math.min(min, costs[2] + find(j, days, costs));

    return (t[i] = min);
  }

  const t = Array(days.length + 1).fill(null);

  return find(0, days, costs);
}
