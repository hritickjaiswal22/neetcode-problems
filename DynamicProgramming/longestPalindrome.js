function longestPalindrome(s) {
  const n = s.length;
  let resultLen = 1;
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < s.length; i++) {
    let low = i - 1;
    let high = i + 1;

    while (low >= 0 && high < n && s[low] === s[high]) {
      if (high - low + 1 > resultLen) {
        resultLen = high - low + 1;
        startIndex = low;
        endIndex = high;
      }
      low--;
      high++;
    }

    low = i;
    high = i + 1;

    while (low >= 0 && high < n && s[low] === s[high]) {
      if (high - low + 1 > resultLen) {
        resultLen = high - low + 1;
        startIndex = low;
        endIndex = high;
      }
      low--;
      high++;
    }
  }

  return s.substring(startIndex, endIndex + 1);
}
