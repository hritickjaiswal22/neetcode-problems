function partitionLabels(s) {
  const hash = {};
  const result = [];

  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    let j = i;
    let maxIndex = hash[s[i]];

    while (j < s.length && j <= maxIndex) {
      if (hash[s[j]] > maxIndex) maxIndex = hash[s[j]];
      j++;
    }

    result.push(j - i);
    i = j - 1;
  }

  return result;
}
