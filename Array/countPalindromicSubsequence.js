function countPalindromicSubsequence(s) {
  const hash = {};
  const prefix = [];
  const temp = {};
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (hash[char]) {
      if (hash[char].length === 2) hash[char].pop();

      hash[char].push(i);
    } else hash[char] = [i];
  }

  for (const char of s) {
    if (temp[char]) temp[char]++;
    else temp[char] = 1;

    prefix.push({ ...temp });
  }

  for (const char of Object.keys(hash)) {
    const arr = hash[char];

    if (arr.length === 2) {
      const obj1 = prefix[arr[0]];
      const obj2 = prefix[arr[1]];

      for (const key of Object.keys(obj2)) {
        const sum = obj2[key] - obj1[key] ? obj1[key] : 0;

        if (key === char && sum > 1) result++;
        else {
          if (sum) result++;
        }
      }
    }
  }

  return result;
}
