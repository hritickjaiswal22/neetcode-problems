function wordBreak(s, wordDict) {
  function find(i, t, hash, str) {
    if (i >= str.length) return true;
    if (t[i] !== null) return t[i];

    let temp = "";
    let result = false;

    for (let j = i; j < str.length; j++) {
      temp += str[j];

      if (hash[temp]) result = result || find(j + 1, t, hash, str);
    }

    return (t[i] = result);
  }

  const hash = {};
  const t = Array(s.length + 1).fill(null);

  for (const word of wordDict) {
    hash[word] = true;
  }

  return find(0, t, hash, s);
}
