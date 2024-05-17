// function integerBreak(n) {
//   function find(n) {
//     if (n === 0) return 1;
//     if (t[n] !== null) return t[n];

//     let max = Number.MIN_SAFE_INTEGER;

//     for (let i = 1; i <= n; i++) {
//       max = Math.max(max, i * find(n - i));
//     }

//     return (t[n] = max);
//   }

//   if (n <= 2) return 1;
//   if (n === 3) return 2;

//   const t = Array(60).fill(null);

//   return find(n);
// }

function integerBreak(n) {
  function find(sum) {
    if (sum === 0) return 1;
    if (t[sum] !== null) return t[sum];

    let result = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= sum; i++) {
      result = Math.max(result, i * find(sum - i));
    }

    return (t[sum] = result);
  }

  if (n <= 3) return n - 1;

  const t = Array(n + 1).fill(null);
  t[0] = 1;
  t[1] = 1;
  t[2] = 1;
  t[3] = 2;

  for (let sum = 1; sum <= n; sum++) {
    let result = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= sum; i++) {
      result = Math.max(result, i * t[sum - i]);
    }

    t[sum] = result;
  }

  return t[n];
}
