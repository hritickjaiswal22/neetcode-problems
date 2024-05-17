function distinctColoring(N, r, g, b) {
  function findColorPrice(color, index) {
    switch (color) {
      case 0:
        return r[index];
      case 1:
        return g[index];
      case 2:
        return b[index];
    }
  }

  function find(i, prevColor) {
    if (i >= N) return 0;
    if (prevColor >= 0 && t[i][prevColor] !== null) return t[i][prevColor];

    let result = Number.MAX_SAFE_INTEGER;

    for (let j = 0; j < 3; j++) {
      if (j !== prevColor) {
        result = Math.min(result, findColorPrice(j, i) + find(i + 1, j));
      }
    }

    if (prevColor >= 0) t[i][prevColor] = result;

    return result;
  }

  const t = Array(N)
    .fill()
    .map((_) => Array(3).fill(null));

  return find(0, -1);
}
