function isPerfectSquare(num) {
  let low = 1;
  let high = num;

  while (low <= high) {
    const mid = low + (high - low) / 2;
    const strMid = String(mid);
    const decimalIndex =
      strMid.indexOf(".") === -1 ? strMid.length : strMid.indexOf(".");
    const mantissa = Number(strMid.substring(0, decimalIndex));
    const sqrd = mantissa * mantissa;

    if (sqrd === num) return true;
    else if (sqrd > num) high = mantissa - 1;
    else low = mantissa + 1;
  }

  return false;
}
