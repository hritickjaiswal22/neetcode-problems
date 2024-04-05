function partitionString(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const hash = {};
    let j = i;

    result++;

    while (j < s.length && !hash[s[j]]) {
      hash[s[j]] = true;
      j++;
    }

    i = j - 1;
  }

  return result;
}
