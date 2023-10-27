function lengthOfLongestSubstring(s) {
  let i = -1;
  let j = 0;
  const hash = {};
  let result = 0;

  while (j < s.length) {
    while (j < s.length) {
      if (hash[s[j]]) hash[s[j]]++;
      else hash[s[j]] = 1;

      if (hash[s[j]] === 2) break;

      result = Math.max(result, j - i);
      j++;
    }

    while (i < j) {
      i++;

      hash[s[i]]--;

      if (hash[s[i]] === 1) break;
    }
  }

  return result;
}
