function isAlienSorted(words, order) {
  const map = Array(26).fill(-1);

  for (let i = 0; i < order.length; i++) {
    const asci = order[i].charCodeAt(0);

    map[asci - 97] = i;
  }

  for (let i = 0; i < words.length - 1; i++) {
    if (!find(words[i], words[i + 1], map)) return false;
  }

  return true;
}

function find(str1, str2, map) {
  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] !== str2[j]) {
      const asci1 = str1[i].charCodeAt(0);
      const asci2 = str2[j].charCodeAt(0);

      if (map[asci1 - 97] > map[asci2 - 97]) return false;
      return true;
    }
    i++;
    j++;
  }

  if (i !== str1.length && j === str2.length) return false;

  return true;
}
