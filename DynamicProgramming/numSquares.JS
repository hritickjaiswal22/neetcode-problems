function numSquares(n) {
  function find(n) {
    if (n === 0) return 0;
    if (t[n] !== null) return t[n];

    let i = 1;
    let min = Number.MAX_SAFE_INTEGER;

    while (i * i <= n) {
      min = Math.min(min, 1 + find(n - i * i));
      i++;
    }

    return (t[n] = min);
  }

  const t = Array(n + 1).fill(null);

  return find(n);
}
