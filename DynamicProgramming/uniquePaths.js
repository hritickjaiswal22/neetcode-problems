function uniquePaths(m, n) {
  m = m - 1;
  n = n - 1;

  return factorial(m + n) / (factorial(m) * factorial(n));
}

function factorial(n) {
  if (n === 0) return 1;
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
}
