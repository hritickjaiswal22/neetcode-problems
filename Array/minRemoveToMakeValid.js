function minRemoveToMakeValid(s) {
  let result = "";
  const stack = [];
  const indicesToRemove = new Set();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(") stack.push(i);
    else if (char === ")" && stack.length) stack.pop();
    else if (char === ")" && !stack.length) indicesToRemove.add(i);
  }

  for (const index of stack) {
    indicesToRemove.add(index);
  }

  for (let i = 0; i < s.length; i++) {
    if (!indicesToRemove.has(i)) result += s[i];
  }

  return result;
}
