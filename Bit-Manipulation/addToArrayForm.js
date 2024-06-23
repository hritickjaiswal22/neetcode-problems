function addToArrayForm(num, k) {
  const kStr = String(k);
  let j = kStr.length - 1;
  let carry = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    let temp = num[i] + carry;

    if (j >= 0) {
      temp += Number(kStr[j]);
      j--;
    }

    num[i] = temp % 10;
    carry = Math.floor(temp / 10);
  }

  while (j >= 0) {
    const temp = Number(kStr[j]) + carry;
    num.unshift(temp % 10);
    carry = Math.floor(temp / 10);
    j--;
  }

  if (carry) num.unshift(carry);

  return num;
}
