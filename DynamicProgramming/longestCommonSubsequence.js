function longestCommonSubsequence(text1, text2) {
  function find(i, j, t, text1, text2) {
    if (i >= text1.length || j >= text2.length) return 0;
    if (t[i][j] !== null) return t[i][j];

    if (text1[i] === text2[j])
      return (t[i][j] = 1 + find(i + 1, j + 1, t, text1, text2));
    else
      return (t[i][j] = Math.max(
        find(i + 1, j, t, text1, text2),
        find(i, j + 1, t, text1, text2)
      ));
  }

  const t = Array(text1.length + 1)
    .fill()
    .map((_) => Array(text2.length + 1).fill(null));

  return find(0, 0, t, text1, text2);
}
