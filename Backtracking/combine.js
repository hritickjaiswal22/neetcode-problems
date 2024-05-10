// function combine(n, k) {
//   function find(i, temp) {
//     if (temp.length === k) {
//       result.push(temp);
//       return;
//     }
//     if (i > n) return;

//     find(i + 1, [...temp, i]);
//     find(i + 1, temp);
//   }

//   const result = [];

//   find(1, []);

//   return result;
// }

function combine(n, k) {
  function find(arr, temp) {
    if (temp.length === k) {
      result.push(temp);
      return;
    }
    if (arr.length === 0) return;

    const num = arr.shift();

    find([...arr], [...temp, num]);
    find([...arr], [...temp]);
  }

  const result = [];
  const temp = [];
  for (let i = 0; i < n; i++) {
    temp.push(i + 1);
  }

  find(temp, []);

  return result;
}
