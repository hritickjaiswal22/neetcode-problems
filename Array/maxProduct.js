function maxProduct(s) {
  const n = s.length;
  const hash = {};
  let result = 0;

  // This is for generating all possible subsequences and then choosing palindrome out of them
  for (let mask = 1; mask < 2 ** n; mask++) {
    let subseq = "";

    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) subseq += s[i];
    }

    const temp = subseq;

    if (subseq === temp.split("").reverse().join("")) {
      hash[mask] = subseq.length;
    }
  }

  for (const m1 of Object.keys(hash)) {
    for (const m2 of Object.keys(hash)) {
      if ((m1 & m2) === 0) result = Math.max(result, hash[m1] * hash[m2]);
    }
  }

  return result;
}
