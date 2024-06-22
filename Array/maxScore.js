function maxScore(s) {
  let leftZeroes = 0;
  let rightOnes = 0;
  let result = 0;

  for (const char of s) {
    if (char === "1") rightOnes++;
  }

  if (s[0] === "1") rightOnes--;
  else leftZeroes++;
  result = Math.max(result, leftZeroes + rightOnes);

  for (let i = 1; i < s.length - 1; i++) {
    const char = s[i];

    if (char === "1") rightOnes--;
    else leftZeroes++;

    result = Math.max(result, leftZeroes + rightOnes);
  }

  return result;
}
