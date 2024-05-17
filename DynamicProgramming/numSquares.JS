// function numSquares(n) {
//   function find(n) {
//     if (n === 0) return 0;
//     if (t[n] !== null) return t[n];

//     let i = 1;
//     let min = Number.MAX_SAFE_INTEGER;

//     while (i * i <= n) {
//       min = Math.min(min, 1 + find(n - i * i));
//       i++;
//     }

//     return (t[n] = min);
//   }

//   const t = Array(n + 1).fill(null);

//   return find(n);
// }

function numSquares(n) {
  function find(sum) {
    if (sum === 0) return 0;

    let result = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i * i <= sum; i++) {
      result = Math.min(result, 1 + find(sum - i * i));
    }

    return result;
  }

  const t = Array(n + 2).fill(Number.MAX_SAFE_INTEGER);
  t[0] = 0;

  for (let sum = 1; sum <= n; sum++) {
    let result = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i * i <= sum; i++) {
      result = Math.min(result, 1 + t[sum - i * i]);
    }

    t[sum] = result;
  }

  return t[n];
}
