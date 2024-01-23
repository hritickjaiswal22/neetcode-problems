function gcdOfStrings(str1, str2) {
  function generate(str, n) {
    let temp = "";

    for (let i = 0; i < n; i++) {
      temp += str;
    }

    return temp;
  }

  const n = str1.length;
  const m = str2.length;
  let result = "";

  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      const subStr = str1.substring(0, i);
      if (str1 === generate(subStr, n / i) && str2 === generate(subStr, m / i))
        result = subStr;
    }
  }

  return result;
}
