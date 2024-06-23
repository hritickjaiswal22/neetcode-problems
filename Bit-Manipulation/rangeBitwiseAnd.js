function rangeBitwiseAnd(left, right) {
  if (left === 0 || right === 0) return 0;
  if (left === right) return left;

  let i = 0;
  while (2 ** i <= right) {
    const val = 2 ** i;

    if (val > left && val <= right) return 0;
    i++;
  }

  let result = left;

  for (let i = left; i <= right; i++) {
    result = result & i;
  }

  return result;
}
