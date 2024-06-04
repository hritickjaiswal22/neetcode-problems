// function gcdOfStrings(str1, str2) {
//   function generate(str, n) {
//     let temp = "";

//     for (let i = 0; i < n; i++) {
//       temp += str;
//     }

//     return temp;
//   }

//   const n = str1.length;
//   const m = str2.length;
//   let result = "";

//   for (let i = 1; i <= Math.min(n, m); i++) {
//     if (n % i === 0 && m % i === 0) {
//       const subStr = str1.substring(0, i);
//       if (str1 === generate(subStr, n / i) && str2 === generate(subStr, m / i))
//         result = subStr;
//     }
//   }

//   return result;
// }

function gcdOfStrings(str1, str2) {
  let result = "";
  let temp = "";

  for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
    temp += str1[i];

    if (isDivisible(str1, temp) && isDivisible(str2, temp)) result = temp;
  }

  return result;
}

function isDivisible(x, y) {
  if (x.length % y.length) return false;

  const repeats = x.length / y.length;
  let temp = "";

  for (let i = 0; i < repeats; i++) {
    temp += y;
  }

  return temp === x;
}
