// function mincostTickets(days, costs) {
//   function find(i, days, costs) {
//     if (i >= days.length) return 0;
//     if (t[i] !== null) return t[i];

//     let min = Number.MAX_SAFE_INTEGER;

//     min = Math.min(min, costs[0] + find(i + 1, days, costs));

//     const limit1 = days[i] + 6;
//     let j = i;
//     while (j < days.length && days[j] <= limit1) j++;
//     min = Math.min(min, costs[1] + find(j, days, costs));

//     const limit2 = days[i] + 29;
//     j = i;
//     while (j < days.length && days[j] <= limit2) j++;
//     min = Math.min(min, costs[2] + find(j, days, costs));

//     return (t[i] = min);
//   }

//   const t = Array(days.length + 1).fill(null);

//   return find(0, days, costs);
// }

function mincostTickets(days, costs) {
  function nextDayIndex(startIndex, nextday) {
    for (let i = startIndex; i < n; i++) {
      if (nextday <= days[i]) return i;
    }

    return n;
  }

  const n = days.length;
  const t = Array(n + 1).fill(null);

  t[n] = 0;

  for (let i = n - 1; i >= 0; i--) {
    let result = Number.MAX_SAFE_INTEGER;

    result = Math.min(result, costs[0] + t[nextDayIndex(i, days[i] + 1)]);
    result = Math.min(result, costs[1] + t[nextDayIndex(i, days[i] + 7)]);
    result = Math.min(result, costs[2] + t[nextDayIndex(i, days[i] + 30)]);

    t[i] = result;
  }

  return t[0];
}
