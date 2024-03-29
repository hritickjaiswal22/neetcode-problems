function ladderLength(beginWord, endWord, wordList) {
  const hash = {};
  const queue = [];
  let result = Number.MAX_SAFE_INTEGER;

  for (const word of wordList) {
    hash[word] = true;
  }

  queue.push([beginWord, 1]);

  while (queue.length > 0) {
    const [word, dist] = queue.shift();

    if (word === endWord) result = Math.min(result, dist);

    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < 26; j++) {
        const alpha = String.fromCharCode(97 + j);

        const newWord = word.substring(0, i) + alpha + word.substring(i + 1);

        if (hash[newWord]) {
          queue.push([newWord, dist + 1]);
          delete hash[newWord];
        }
      }
    }
  }

  if (result === Number.MAX_SAFE_INTEGER) return 0;
  return result;
}
