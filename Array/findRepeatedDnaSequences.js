function findRepeatedDnaSequences(s) {
  if (s.length <= 10) return [];

  const hash = {};
  const arr = s.substring(0, 10).split("");
  const result = [];

  hash[arr.join("")] = 1;
  for (let i = 10; i < s.length; i++) {
    arr.shift();
    arr.push(s[i]);

    const str = arr.join("");
    if (hash[str]) hash[str]++;
    else hash[str] = 1;
  }

  for (const key of Object.keys(hash)) {
    if (hash[key] > 1) result.push(key);
  }

  return result;
}
