function sequentialDigits(low, high) {
  let result = new Set();
  const minLength = digitCount(low);
  const maxLength = digitCount(high);

  for (let i = minLength; i <= maxLength; i++) {
    for (let j = 1; j <= 9; j++) {
      let k = j;
      let temp = "";

      while (temp.length !== i && k < 10) {
        temp += k;
        k++;
      }

      temp = Number(temp);

      if (
        temp >= low &&
        temp <= high &&
        String(temp).length >= minLength &&
        String(temp).length <= maxLength
      )
        result.add(temp);
      if (temp > high) break;
    }
  }

  result = [...result].sort((a, b) => a - b);

  return result;
}

function digitCount(num) {
  let result = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    result++;
  }

  return result;
}
