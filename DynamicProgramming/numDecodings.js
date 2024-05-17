// function numDecodings(s) {
//   function hasLeadingZeroes(str) {
//     if (str[0] === "0") return true;
//     return false;
//   }

//   function find(i) {
//     if (i >= s.length) return 1;
//     if (t[i] !== null) return t[i];

//     let j = i;
//     let temp = "";
//     let sum = 0;

//     while (j < s.length) {
//       temp += s[j];
//       const val = Number(temp);

//       if (!hasLeadingZeroes(temp) && val >= 1 && val <= 26) sum += find(j + 1);

//       if (val > 26) break;
//       j++;
//     }

//     return (t[i] = sum);
//   }

//   const t = Array(s.length + 1).fill(null);

//   return find(0);
// }

function numDecodings(s) {
  function isValid(str) {
    if (str[0] === "0") return false;

    const num = Number(str);

    if (num >= 1 && num <= 26) return true;
    return false;
  }

  // function find(i) {
  //   if (i >= n) return 1;
  //   if (t[i] !== null) return t[i];

  //   let str = "";
  //   let result = 0;

  //   for (let j = i; j < n; j++) {
  //     str += s[j];
  //     if (isValid(str)) result += find(j + 1);
  //   }

  //   return (t[i] = result);
  // }

  // return find(0);

  const n = s.length;
  const t = Array(n + 2).fill(null);

  t[n] = 1;
  t[n + 1] = 1;

  for (let i = n - 1; i >= 0; i--) {
    let str = "";
    let result = 0;

    for (let j = i; j < n; j++) {
      str += s[j];
      if (isValid(str)) result += t[j + 1];
    }

    t[i] = result;
  }

  return t[0];
}
