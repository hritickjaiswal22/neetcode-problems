function characterReplacement(s, k) {
  let result = Number.MIN_SAFE_INTEGER;

  for (let l = 65; l <= 90; l++) {
    const char = String.fromCharCode(l);
    const hash = {};
    let i = -1;
    let j = 0;
    let tempK = k;

    while (j < s.length) {
      while (j < s.length) {
        if (s[j] !== char) {
          if (tempK) {
            hash[j] = true;
            tempK--;
          } else break;
        }

        result = Math.max(result, j - i);
        j++;
      }

      while (i < j) {
        i++;
        if (hash[i]) {
          delete hash[i];
          tempK++;
          break;
        }
      }
    }
  }

  return result;
}
