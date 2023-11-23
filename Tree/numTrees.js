function numTrees(n) {
  const result = [1, 1, 2, 5];

  if (n <= 3) return result[n];

  for (let i = 4; i <= n; i++) {
    let temp = 0;

    for (let j = 0; j < i; j++) {
      temp += result[j] * result[i - j - 1];
    }

    result.push(temp);
  }

  return result[n];
}
