// function generateParenthesis(n) {
//   function find(s, opens, closes) {
//     if (s.length === 2 * n) result.push(s);

//     if (opens < n) find(s + "(", opens + 1, closes);
//     if (closes < opens) find(s + ")", opens, closes + 1);
//   }

//   const result = [];
//   find("", 0, 0);

//   return result;
// }

function generateParenthesis(n) {
  function find(str, brackets) {
    if (str.length > 2 * n) return;
    if (str.length === 2 * n && brackets === 0) {
      result.push(str);
      return;
    }

    if (brackets < n) find(str + "(", brackets + 1);
    if (brackets > 0) find(str + ")", brackets - 1);
  }

  const result = [];
  find("", 0);

  return result;
}
