function equalSubstring(s, t, maxCost) {
  let cost = 0;
  let i = -1;
  let j = -1;
  let result = 0;

  while (j < s.length - 1) {
    while (j < s.length - 1) {
      j++;

      const diff = findDiff(s[j], t[j]);

      cost += diff;

      if (cost > maxCost) break;

      result = Math.max(result, j - i);
    }

    while (i < j) {
      i++;

      const diff = findDiff(s[i], t[i]);

      cost -= diff;

      if (cost <= maxCost) break;
    }
  }

  return result;
}

function findDiff(char1, char2) {
  return Math.abs(char1.charCodeAt(0) - char2.charCodeAt(0));
}
