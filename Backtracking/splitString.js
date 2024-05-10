// function splitString(s) {
//   function find(i, prevVal) {
//     if (i >= s.length) return true;
//     if (prevVal === 0 && s[i] === "0") return find(i + 1, 0);

//     let str = "";

//     for (let j = i; j < s.length; j++) {
//       str += s[j];
//       const num = Number(str);

//       if (num >= prevVal) return false;

//       if (num === prevVal - 1) return find(j + 1, num);
//     }

//     return false;
//   }

//   if (s === "00") return false;

//   let str = "";

//   for (let i = 0; i < s.length - 1; i++) {
//     str += s[i];
//     const num = Number(str);

//     if (find(i + 1, num)) return true;
//   }

//   return false;
// }

// // "200100"
// // 192 / 196 testcases passed

function splitString(s) {
  function find(i, temp) {
    if (i >= n && temp.length > 1) {
      result = true;
      return;
    }
    if (result) return;

    let str = "";

    for (let j = i; j < n; j++) {
      str += s[j];

      const num = Number(str);

      if (!temp.length || num === temp[temp.length - 1] - 1) {
        find(j + 1, [...temp, num]);
      }
    }
  }

  const n = s.length;
  let result = false;

  find(0, []);

  return result;
}
