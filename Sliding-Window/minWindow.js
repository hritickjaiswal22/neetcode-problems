function minWindow(s, t) {
  const m = s.length;
  const n = t.length;
  const targetHash = {};
  const hash = {};
  let i = -1;
  let j = 0;
  let result = Number.MAX_SAFE_INTEGER;
  let resultI = -1;
  let resultJ = -1;

  if (m < n) return "";

  for (let k = 0; k < n; k++) {
    if (targetHash[t[k]]) targetHash[t[k]]++;
    else targetHash[t[k]] = 1;
  }

  while (j < m) {
    while (j < m) {
      if (hash[s[j]]) hash[s[j]]++;
      else hash[s[j]] = 1;

      if (isMatch(hash, targetHash)) {
        if (j - i < result) {
          result = j - i;
          resultI = i + 1;
          resultJ = j;
        }
        break;
      }

      j++;
    }

    while (i < j) {
      i++;

      hash[s[i]]--;

      if (!isMatch(hash, targetHash)) {
        j++;
        break;
      } else {
        if (j - i < result) {
          result = j - i;
          resultI = i + 1;
          resultJ = j;
        }
      }
    }
  }

  if (resultI === -1 && resultJ === -1) return "";

  return s.substring(resultI, resultJ + 1);
}

function isMatch(hash, targetHash) {
  for (const key of Object.keys(targetHash)) {
    if (hash[key] === undefined || hash[key] < targetHash[key]) return false;
  }
  return true;
}
