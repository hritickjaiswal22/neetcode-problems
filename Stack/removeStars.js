function removeStars(s) {
  const result = [];

  for (const char of s) {
    if (char === "*") result.pop();
    else result.push(char);
  }

  return result.join("");
}
