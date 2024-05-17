function countSubstrings(s) {
  const n = s.length;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let low = i - 1;
    let high = i + 1;

    while (low >= 0 && high < n && s[low] === s[high]) {
      result++;
      low--;
      high++;
    }

    low = i;
    high = i + 1;

    while (low >= 0 && high < n && s[low] === s[high]) {
      result++;
      low--;
      high++;
    }
  }

  return result;
}
