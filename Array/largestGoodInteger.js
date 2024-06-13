function largestGoodInteger(num) {
  let result = "";

  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      const str = num.substring(i, i + 3);
      if (!result || Number(str) > Number(result)) result = str;
    }
  }

  return result;
}
