function combine(n, k) {
  function find(i, temp) {
    if (temp.length === k) {
      result.push(temp);
      return;
    }
    if (i > n) return;

    find(i + 1, [...temp, i]);
    find(i + 1, temp);
  }

  const result = [];

  find(1, []);

  return result;
}
