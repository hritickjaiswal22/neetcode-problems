function longestIdealString(s, k) {
  function isWithinDiff(a, b) {
    return Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) <= k;
  }

  function find(i) {
    if (i >= n) return 0;
    if (t[i] !== null) return t[i];

    let result = 0;

    for (let j = i + 1; j < n; j++) {
      if (isWithinDiff(s[i], s[j])) result = Math.max(result, 1 + find(j));
    }

    return (t[i] = result);
  }

  const n = s.length;
  let result = 1;
  const t = Array(n + 3).fill(null);

  for (let i = 0; i < n; i++) {
    result = Math.max(result, 1 + find(i));
  }

  return result;
}
