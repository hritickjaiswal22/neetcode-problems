function makeGood(s) {
  const stack = [];

  for (const char of s) {
    if (
      stack.length &&
      stack[stack.length - 1] !== char &&
      stack[stack.length - 1].toLowerCase() === char.toLowerCase()
    )
      stack.pop();
    else stack.push(char);
  }

  return stack.join("");
}
