function findPaths(m, n, maxMove, startRow, startColumn) {
  function find(i, j, moves) {
    if (i < 0 || i >= m || j < 0 || j >= n) return 1;
    if (moves === 0) return 0;
    if (t[i][j][moves] !== null) return t[i][j][moves];

    // const result =
    //   find(i + 1, j, moves - 1) +
    //   find(i - 1, j, moves - 1) +
    //   find(i, j + 1, moves - 1) +
    //   find(i, j - 1, moves - 1);

    const a = getModulo(find(i + 1, j, moves - 1), find(i - 1, j, moves - 1));
    const b = getModulo(a, find(i, j + 1, moves - 1));
    const c = getModulo(b, find(i, j - 1, moves - 1));

    t[i][j][moves] = c;

    return c;
  }

  const t = create3DArray(m + 2, n + 2, maxMove + 2);
  const result = find(startRow, startColumn, maxMove);

  return result;
}

function getModulo(a, b) {
  const mod = 10 ** 9 + 7;

  return ((a % mod) + (b % mod)) % mod;
}

function create3DArray(m, n, k) {
  // Create the outer array (of size m)
  let array = new Array(m);

  for (let i = 0; i < m; i++) {
    // Create the second level array (of size n)
    array[i] = new Array(n);

    for (let j = 0; j < n; j++) {
      // Create the third level array (of size k)
      array[i][j] = new Array(k);

      for (let l = 0; l < k; l++) {
        // Initialize the third level array with some value, e.g., null
        array[i][j][l] = null;
      }
    }
  }

  return array;
}
