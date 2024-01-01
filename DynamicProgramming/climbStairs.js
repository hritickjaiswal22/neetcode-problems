function climbStairs(n) {
  function find(n, t) {
    if (n <= 2) return n;
    if (t[n]) return t[n];

    return (t[n] = find(n - 1, t) + find(n - 2, t));
  }

  const t = Array(n + 1).fill(null);

  return find(n, t);
}
