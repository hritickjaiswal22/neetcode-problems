function missingRolls(rolls, mean, n) {
  const m = rolls.length;
  const requiredSum = (n + m) * mean - rolls.reduce((acc, cur) => acc + cur, 0);

  if (requiredSum / n > 6 || requiredSum <= 0) return [];

  const div = Math.floor(requiredSum / n);
  const rem = requiredSum % n;

  const result = Array(n).fill(div);
  let temp = rem;

  for (let i = 0; i < n; i++) {
    if (temp <= 0) break;
    result[i]++;
    temp--;
  }

  return result;
}
