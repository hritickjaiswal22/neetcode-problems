function largestNumber(nums) {
  nums.sort(sorter);

  return nums.join("");
}

function sorter(a, b) {
  const str1 = String(a);
  const str2 = String(b);
  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    const num1 = Number(str1[i]);
    const num2 = Number(str2[j]);
    if (num1 > num2) return -100;
    else if (num2 > num1) return 100;

    i++;
    j++;
  }

  if (BigInt(`${a}${b}`) > BigInt(`${b}${a}`)) return -100;
  return 100;
}
