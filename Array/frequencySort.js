function frequencySort(s) {
  const hash = {};
  const arr = [];
  let result = "";

  for (const char of s) {
    if (hash[char]) hash[char]++;
    else hash[char] = 1;
  }

  for (const key of Object.keys(hash)) {
    const value = hash[key];

    arr.push({
      key,
      value,
    });
  }

  arr.sort((a, b) => b.value - a.value);

  for (const obj of arr) {
    const { key, value } = obj;

    for (let i = 0; i < value; i++) {
      result += key;
    }
  }

  return result;
}
