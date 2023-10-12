/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (const token of tokens) {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      console.log(stack);
      const second = stack.pop();
      const first = stack.pop();
      stack.push(evaluate(first, second, token));
    } else stack.push(Number(token));
  }

  return stack[0];
};

function evaluate(first, second, operator) {
  if (operator === "+" || operator === "-" || operator === "*")
    return eval(`${first} ${operator} ${second}`);
  else {
    const sign = first / second;
    if (sign < 0) return Math.ceil(first / second);
    return Math.floor(first / second);
  }
}
