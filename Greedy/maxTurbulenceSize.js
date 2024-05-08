// Recursive
// function maxTurbulenceSize(arr) {
//   function find(i, j) {
//     if (i >= n) {
//       if (j < 0) return 0;
//       else return i - j;
//     }

//     if (j < 0) {
//       let result1 = 0;
//       let result2 = 0;
//       let result3 = 0;

//       result1 = find(i + 1, j);

//       if (i + 1 < n && arr[i] > arr[i + 1]) result2 = find(i + 1, i);
//       if (i + 1 < n && arr[i] < arr[i + 1]) result3 = find(i + 1, i);

//       return Math.max(result1, result2, result3);
//     } else {
//       let temp = i - j;

//       if (arr[j] > arr[j + 1]) {
//         if (temp % 2 === 1) {
//           if (arr[i] < arr[i - 1]) return find(i + 1, j);
//           else return temp;
//         } else {
//           if (arr[i] > arr[i - 1]) return find(i + 1, j);
//           else return temp;
//         }
//       } else {
//         if (temp % 2 === 1) {
//           if (arr[i] > arr[i - 1]) return find(i + 1, j);
//           else return temp;
//         } else {
//           if (arr[i] < arr[i - 1]) return find(i + 1, j);
//           else return temp;
//         }
//       }
//     }
//   }

//   const n = arr.length;

//   return Math.max(1, find(0, -1));
// }

function maxTurbulenceSize(arr) {
  function find(i, j) {
    if (i >= n) {
      if (j < 0) return 0;
      else return i - j;
    }
    if (j >= 0 && t[i][j] !== null) return t[i][j];

    if (j < 0) {
      let result1 = 0;
      let result2 = 0;
      let result3 = 0;

      result1 = find(i + 1, j);

      if (i + 1 < n && arr[i] > arr[i + 1]) result2 = find(i + 1, i);
      if (i + 1 < n && arr[i] < arr[i + 1]) result3 = find(i + 1, i);

      return Math.max(result1, result2, result3);
    } else {
      let temp = i - j;

      if (arr[j] > arr[j + 1]) {
        if (temp % 2 === 1) {
          if (arr[i] < arr[i - 1]) return (t[i][j] = find(i + 1, j));
          else return (t[i][j] = temp);
        } else {
          if (arr[i] > arr[i - 1]) return (t[i][j] = find(i + 1, j));
          else return (t[i][j] = temp);
        }
      } else {
        if (temp % 2 === 1) {
          if (arr[i] > arr[i - 1]) return (t[i][j] = find(i + 1, j));
          else return (t[i][j] = temp);
        } else {
          if (arr[i] < arr[i - 1]) return (t[i][j] = find(i + 1, j));
          else return (t[i][j] = temp);
        }
      }
    }
  }

  const n = arr.length;
  const t = Array(n + 2)
    .fill()
    .map(() => Array(n + 2).fill(null));

  return Math.max(1, find(0, -1));
}
