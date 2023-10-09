function findLongestWord(s, dictionary) {
  dictionary.sort((a, b) => {
    const len1 = a.length;
    const len2 = b.length;

    if (len1 < len2) return -100;
    else if (len2 < len1) return 100;
    else {
      if (a < b) return 100;
      return -100;
    }
  });

  for (let i = dictionary.length - 1; i >= 0; i--) {
    if (isSubsequence(dictionary[i], s)) return dictionary[i];
  }

  return "";
}

function isSubsequence(str, s) {
  let j = 0;

  for (const char of s) {
    if (j >= str.length) break;

    if (char === str[j]) j++;
  }

  if (j >= str.length) return true;
  return false;
}
