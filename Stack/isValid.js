function isValid(s) {
  const stack = [];

  for (const bracket of s) {
    if (bracket === "(" || bracket === "[" || bracket === "{")
      stack.push(bracket);
    else {
      const top = stack.pop();

      if (bracket === ")" && top !== "(") return false;
      else if (bracket === "]" && top !== "[") return false;
      else if (bracket === "}" && top !== "{") return false;
    }
  }

  if (stack.length === 0) return true;
  return false;
}
