// Watched the solution
// https://www.youtube.com/watch?v=cFabMOnJaq0

function removeKdigits(num, k) {
  const n = num.length;
  const stack = [];
  let result = "";
  let i = 0;
  const tempK = k;

  if (k >= n) return "0";

  for (const char of num) {
    const digit = Number(char);

    while (stack.length && k > 0 && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }

    stack.push(digit);
  }

  while (i < stack.length && result.length < n - tempK) {
    result += stack[i];
    i++;
  }

  return BigInt(result).toString();
}
