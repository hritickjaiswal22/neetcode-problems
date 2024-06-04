function isHappy(n) {
  const start = Date.now();
  let count = 0;

  while (count < 10 ** 4) {
    if (n === 1) return true;
    const str = String(n);
    const len = str.length;
    let result = 0;

    for (let i = 0; i < len; i++) {
      result += Number(str[i]) * Number(str[i]);
    }

    n = result;
    count++;
  }

  return false;
}
