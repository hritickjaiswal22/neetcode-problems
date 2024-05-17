// function longestCommonSubsequence(text1, text2) {
//   function find(i, j, t, text1, text2) {
//     if (i >= text1.length || j >= text2.length) return 0;
//     if (t[i][j] !== null) return t[i][j];

//     if (text1[i] === text2[j])
//       return (t[i][j] = 1 + find(i + 1, j + 1, t, text1, text2));
//     else
//       return (t[i][j] = Math.max(
//         find(i + 1, j, t, text1, text2),
//         find(i, j + 1, t, text1, text2)
//       ));
//   }

//   const t = Array(text1.length + 1)
//     .fill()
//     .map((_) => Array(text2.length + 1).fill(null));

//   return find(0, 0, t, text1, text2);
// }

function longestCommonSubsequence(text1, text2) {
  function find(i, j) {
    if (i >= n || j >= m) return 0;
    if (t[i][j] !== null) return t[i][j];

    if (text1[i] === text2[j]) return (t[i][j] = 1 + find(i + 1, j + 1));
    else return (t[i][j] = Math.max(find(i + 1, j), find(i, j + 1)));
  }

  const n = text1.length;
  const m = text2.length;
  const t = Array(n + 1)
    .fill()
    .map(() => Array(m + 1).fill(null));

  return find(0, 0);
}
