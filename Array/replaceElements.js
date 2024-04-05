// function replaceElements(arr) {
//   const n = arr.length;
//   let max = -1;

//   for (let i = n - 1; i >= 0; i--) {
//     const temp = arr[i];

//     arr[i] = max;

//     max = Math.max(max, temp);
//   }

//   return arr;
// }

function replaceElements(arr) {
  const n = arr.length;
  let max = arr[n - 1];

  arr[n - 1] = -1;

  for (let i = n - 2; i >= 0; i--) {
    const temp = Math.max(max, arr[i]);
    arr[i] = max;
    max = temp;
  }

  return arr;
}
