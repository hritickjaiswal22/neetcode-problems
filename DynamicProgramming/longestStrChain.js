function longestStrChain(words) {
  function isPredecessor(wordA, wordB) {
    if (wordB.length !== wordA.length + 1) return false;

    let i = 0;
    let j = 0;

    while (i < wordA.length && j < wordB.length) {
      if (wordA[i] === wordB[j]) i++;
      j++;
    }

    return i === wordA.length;
  }

  function find(i, prevIndex) {
    if (i >= words.length || words[i].length > words[prevIndex].length + 1)
      return 0;
    if (t[i][prevIndex] !== null) return t[i][prevIndex];

    if (isPredecessor(words[prevIndex], words[i]))
      return (t[i][prevIndex] = Math.max(
        1 + find(i + 1, i),
        find(i + 1, prevIndex)
      ));
    else return (t[i][prevIndex] = find(i + 1, prevIndex));
  }

  const n = words.length;
  const t = Array(n + 4)
    .fill()
    .map((_) => Array(n + 4).fill(null));
  let result = 1;

  words.sort((a, b) => a.length - b.length);

  for (let i = 0; i < n - 1; i++) {
    result = Math.max(result, find(i + 1, i));
  }

  return result;
}
