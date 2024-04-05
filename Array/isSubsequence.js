// function isSubsequence(s, t) {
//   let i = 0;

//   for (let j = 0; j < t.length; j++) {
//     if (i >= s.length) return true;

//     if (t[j] === s[i]) i++;
//   }
//   if (i >= s.length) return true;

//   return false;
// }

function isSubsequence(s, t) {
  let i = 0;

  for (const char of t) {
    if (i >= s.length) return true;

    if (char === s[i]) i++;
  }

  if (i >= s.length) return true;
  return false;
}
