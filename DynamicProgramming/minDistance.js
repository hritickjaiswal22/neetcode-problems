function minDistance(word1, word2) {
  function find(i, j, t, word1, word2) {
    if (i >= word1.length) return word2.length - j;
    if (j >= word2.length) return word1.length - i;
    if (t[i][j] !== null) return t[i][j];

    if (word1[i] === word2[j])
      return (t[i][j] = find(i + 1, j + 1, t, word1, word2));
    else {
      const left = find(i + 1, j + 1, t, word1, word2);
      const mid = find(i, j + 1, t, word1, word2);
      const right = find(i + 1, j, t, word1, word2);

      return (t[i][j] = 1 + Math.min(left, mid, right));
    }
  }

  const t = Array(word1.length + 1)
    .fill()
    .map((_) => Array(word2.length + 1).fill(null));

  return find(0, 0, t, word1, word2);
}
