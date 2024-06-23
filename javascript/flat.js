function flat(arr, n) {
  function find(list, depth) {
    const result = [];

    for (const val of list) {
      if (Array.isArray(val)) {
        if (depth + 1 <= n) {
          const temp = find(val, depth + 1);
          result.push(...temp);
        } else result.push(val);
      } else result.push(val);
    }

    return result;
  }

  if (n === 0) return arr;

  return find(arr, 0);
}
