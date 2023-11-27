function letterCombinations(digits) {
  function find(i, temp) {
    if (i >= digits.length) return temp;

    const arr = [];

    if (temp.length === 0) {
      arr.push(...hash[digits[i]]);
      return find(i + 1, arr);
    }

    for (const str of temp) {
      for (const char of hash[digits[i]]) {
        arr.push(str + char);
      }
    }

    return find(i + 1, arr);
  }

  const hash = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  return find(0, []);
}
