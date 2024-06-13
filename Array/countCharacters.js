function countCharacters(words, chars) {
  const hash = {};
  let result = 0;

  for (const char of chars) {
    if (hash[char]) hash[char]++;
    else hash[char] = 1;
  }

  for (const word of words) {
    if (canForm(word, { ...hash })) result += word.length;
  }

  return result;
}

function canForm(word, hash) {
  for (const char of word) {
    if (!hash[char]) return false;
    hash[char]--;
  }

  return true;
}
