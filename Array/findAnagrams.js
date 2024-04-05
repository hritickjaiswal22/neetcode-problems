function findAnagrams(s, p) {
  const pLen = p.length;
  const pHash = {};
  const window = {};
  const result = [];

  for (const char of p) {
    if (pHash[char]) pHash[char]++;
    else pHash[char] = 1;
  }

  for (let i = 0; i < pLen; i++) {
    const char = s[i];

    if (window[char]) window[char]++;
    else window[char] = 1;
  }

  if (compareHash(window, pHash)) result.push(0);

  for (let i = 1; i + pLen < s.length; i++) {
    window[s[i - 1]]--;

    if (window[s[i + pLen - 1]] !== undefined) window[s[i + pLen - 1]]++;
    else window[s[i + pLen - 1]] = 1;

    if (compareHash(window, pHash)) result.push(i);
  }

  return result;
}

function compareHash(window, target) {
  for (const targetKey of Object.keys(target)) {
    if (target[targetKey] !== window[targetKey]) return false;
  }

  return true;
}
