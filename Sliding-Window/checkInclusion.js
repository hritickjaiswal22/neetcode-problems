function checkInclusion(s1, s2) {
  const requiredHash = Array(26).fill(0);
  const hash = Array(26).fill(0);
  const len1 = s1.length;

  for (const alpha of s1) {
    const i = alpha.charCodeAt(0) - 97;

    requiredHash[i]++;
  }

  for (let i = 0; i < Math.min(len1, s2.length); i++) {
    const alpha = s2[i];

    const index = alpha.charCodeAt(0) - 97;

    hash[index]++;
  }

  if (isEqual(hash, requiredHash)) return true;

  for (let i = len1; i < s2.length; i++) {
    const prevChar = s2[i - len1];
    const prevIndex = prevChar.charCodeAt(0) - 97;
    const newIndex = s2[i].charCodeAt(0) - 97;

    hash[prevIndex]--;
    hash[newIndex]++;

    if (isEqual(hash, requiredHash)) return true;
  }

  return false;
}

function isEqual(arr1, arr2) {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}
