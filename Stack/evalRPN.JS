// /**
//  * @param {string[]} tokens
//  * @return {number}
//  */
// var evalRPN = function (tokens) {
//   const stack = [];

//   for (const token of tokens) {
//     if (token === "+" || token === "-" || token === "*" || token === "/") {
//       console.log(stack);
//       const second = stack.pop();
//       const first = stack.pop();
//       stack.push(evaluate(first, second, token));
//     } else stack.push(Number(token));
//   }

//   return stack[0];
// };

// function evaluate(first, second, operator) {
//   if (operator === "+" || operator === "-" || operator === "*")
//     return eval(`${first} ${operator} ${second}`);
//   else {
//     const sign = first / second;
//     if (sign < 0) return Math.ceil(first / second);
//     return Math.floor(first / second);
//   }
// }

function evalRPN(tokens) {
  const stack = [];

  for (const token of tokens) {
    switch (token) {
      case "+":
        const temp1 = stack.pop() + stack.pop();
        stack.push(temp1);
        break;
      case "-":
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const temp2 = operand1 - operand2;
        stack.push(temp2);
        break;
      case "*":
        const temp3 = stack.pop() * stack.pop();
        stack.push(temp3);
        break;
      case "/":
        const operand4 = stack.pop();
        const operand3 = stack.pop();
        let sign = operand4 * operand3 > 0 ? 1 : -1;
        let temp4 = Math.floor(Math.abs(operand3) / Math.abs(operand4));
        temp4 = temp4 * sign;
        stack.push(temp4);
        break;
      default:
        stack.push(Number(token));
        break;
    }
  }

  return stack.pop();
}
