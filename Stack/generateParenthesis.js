function generateParenthesis(n) {
  function find(s, opens, closes) {
    if (s.length === 2 * n) result.push(s);

    if (opens < n) find(s + "(", opens + 1, closes);
    if (closes < opens) find(s + ")", opens, closes + 1);
  }

  const result = [];
  find("", 0, 0);

  return result;
}
