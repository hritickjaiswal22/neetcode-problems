function totalFruit(fruits) {
  const n = fruits.length;
  const prefix = Array(n).fill(n);
  prefix[0] = 0;
  const hash = {};
  let result = 0;

  for (let i = 1; i < n; i++) {
    if (fruits[i] === fruits[i - 1]) {
      let j = i;
      while (j < n && fruits[j] === fruits[i - 1]) {
        prefix[j] = i - 1;
        j++;
      }

      i = j - 1;
    } else prefix[i] = i;
  }

  let j = 0;
  hash[fruits[0]] = true;
  result = 1;

  for (let i = 1; i < n; i++) {
    if (!hash[fruits[i]]) {
      if (Object.keys(hash).length === 2) {
        const firstChar = fruits[i - 1];
        const keys = Object.keys(hash);

        if (keys[0] != firstChar) delete hash[keys[0]];
        else delete hash[keys[1]];

        j = prefix[i - 1];
        i--;
        continue;
      } else hash[fruits[i]] = true;
    }

    result = Math.max(result, i - j + 1);
  }

  return result;
}

totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]);
