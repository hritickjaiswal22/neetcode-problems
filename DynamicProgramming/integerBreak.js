function integerBreak(n) {
  function find(n) {
    if (n === 0) return 1;
    if (t[n] !== null) return t[n];

    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= n; i++) {
      max = Math.max(max, i * find(n - i));
    }

    return (t[n] = max);
  }

  if (n <= 2) return 1;
  if (n === 3) return 2;

  const t = Array(60).fill(null);

  return find(n);
}
