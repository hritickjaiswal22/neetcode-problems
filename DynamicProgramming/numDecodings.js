function numDecodings(s) {
  function hasLeadingZeroes(str) {
    if (str[0] === "0") return true;
    return false;
  }

  function find(i) {
    if (i >= s.length) return 1;
    if (t[i] !== null) return t[i];

    let j = i;
    let temp = "";
    let sum = 0;

    while (j < s.length) {
      temp += s[j];
      const val = Number(temp);

      if (!hasLeadingZeroes(temp) && val >= 1 && val <= 26) sum += find(j + 1);

      if (val > 26) break;
      j++;
    }

    return (t[i] = sum);
  }

  const t = Array(s.length + 1).fill(null);

  return find(0);
}
