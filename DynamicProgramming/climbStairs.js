// function climbStairs(n) {
//   function find(n, t) {
//     if (n <= 2) return n;
//     if (t[n]) return t[n];

//     return (t[n] = find(n - 1, t) + find(n - 2, t));
//   }

//   const t = Array(n + 1).fill(null);

//   return find(n, t);
// }

function climbStairs(n) {
  if (n === 1 || n === 2) return n;

  let t1 = 1;
  let t2 = 2;

  for (let i = 3; i <= n; i++) {
    const sum = t1 + t2;

    t1 = t2;
    t2 = sum;
  }

  return t2;
}
