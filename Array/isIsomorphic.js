// function isIsomorphic(s, t) {
//   const hash = {};
//   const dMap = {};

//   for (let i = 0; i < s.length; i++) {
//     if (hash[s[i]]) {
//       if (hash[s[i]] !== t[i]) return false;
//     } else {
//       if (!dMap[t[i]]) {
//         hash[s[i]] = t[i];
//         dMap[t[i]] = true;
//       } else return false;
//     }
//   }

//   return true;
// }

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const hash = {};
  const alreadyHashed = {};

  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      if (alreadyHashed[t[i]]) return false;

      alreadyHashed[t[i]] = true;
      hash[s[i]] = t[i];
    } else if (hash[s[i]] !== t[i]) return false;
  }

  return true;
}
