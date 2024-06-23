function countBits(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const result = [0, 1];
  let currentPow = 1;

  for (let i = 2; i <= n; i++) {
    if (i === currentPow * 2) {
      result.push(1);
      currentPow = currentPow * 2;
    } else result.push(1 + result[i - currentPow]);
  }

  return result;
}
