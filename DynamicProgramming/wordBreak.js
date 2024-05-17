// function wordBreak(s, wordDict) {
//   function find(i, t, hash, str) {
//     if (i >= str.length) return true;
//     if (t[i] !== null) return t[i];

//     let temp = "";
//     let result = false;

//     for (let j = i; j < str.length; j++) {
//       temp += str[j];

//       if (hash[temp]) result = result || find(j + 1, t, hash, str);
//     }

//     return (t[i] = result);
//   }

//   const hash = {};
//   const t = Array(s.length + 1).fill(null);

//   for (const word of wordDict) {
//     hash[word] = true;
//   }

//   return find(0, t, hash, s);
// }

function wordBreak(s, wordDict) {
  // function find(i) {
  //   if (i >= n) return true;
  //   if (t[i] !== null) return t[i];
  //   let str = "";
  //   let result = false;
  //   for (let j = i; j < n; j++) {
  //     str += s[j];
  //     if (dict[str]) {
  //       result = result || find(j + 1);
  //     }
  //     if (result) return (t[i] = result);
  //   }
  //   return (t[i] = result);
  // }
  // const dict = {};
  // const n = s.length;
  // const t = Array(n + 2).fill(null);
  // for (const word of wordDict) {
  //   dict[word] = true;
  // }
  // return !!find(0);

  const dict = {};
  const n = s.length;
  const t = Array(n + 2).fill(false);

  t[n] = true;
  t[n + 1] = true;

  for (const word of wordDict) {
    dict[word] = true;
  }

  for (let i = n - 1; i >= 0; i--) {
    let str = "";
    let result = false;

    for (let j = i; j < n; j++) {
      str += s[j];

      if (dict[str]) result = result || t[j + 1];
    }

    t[i] = result;
  }

  return t[0];
}
