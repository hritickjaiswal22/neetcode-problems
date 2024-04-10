function maxVowels(s, k) {
  let result = 0;
  let vowels = 0;

  for (let i = 0; i < k; i++) {
    const alpha = s[i];

    if (isVowel(alpha)) vowels++;
  }

  result = vowels;

  for (let i = k; i < s.length; i++) {
    const prevChar = s[i - k];

    if (isVowel(prevChar)) vowels--;
    if (isVowel(s[i])) vowels++;

    result = Math.max(result, vowels);
  }

  return result;
}

function isVowel(char) {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  )
    return true;

  return false;
}
