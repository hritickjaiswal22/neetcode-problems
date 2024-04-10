// function characterReplacement(s, k) {
//   let result = Number.MIN_SAFE_INTEGER;

//   for (let l = 65; l <= 90; l++) {
//     const char = String.fromCharCode(l);
//     const hash = {};
//     let i = -1;
//     let j = 0;
//     let tempK = k;

//     while (j < s.length) {
//       while (j < s.length) {
//         if (s[j] !== char) {
//           if (tempK) {
//             hash[j] = true;
//             tempK--;
//           } else break;
//         }

//         result = Math.max(result, j - i);
//         j++;
//       }

//       while (i < j) {
//         i++;
//         if (hash[i]) {
//           delete hash[i];
//           tempK++;
//           break;
//         }
//       }
//     }
//   }

//   return result;
// }

function characterReplacement(s, k) {
  let result = 0;

  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(i + 65);

    const hash = {};
    let j = 0;
    let l = -1;
    let temp = k;

    while (j < s.length) {
      while (j < s.length) {
        if (s[j] === char) {
          result = Math.max(result, j - l);
          j++;
        } else {
          if (temp > 0) {
            temp--;
            hash[j] = true;
            j++;
          } else break;
        }
      }

      while (l < j) {
        l++;
        if (k === 0) {
          l = j;
          j++;
          break;
        }
        if (hash[l] !== undefined) {
          temp++;
          delete hash[l];
          break;
        }
      }
    }
  }

  return result;
}
