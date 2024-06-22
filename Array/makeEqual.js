function makeEqual(words) {
  const hash = {};

  for (const word of words) {
    for (const char of word) {
      if (hash[char]) hash[char]++;
      else hash[char] = 1;
    }
  }

  for (const value of Object.values(hash)) {
    if (value !== words.length) return false;
  }

  return true;
}
