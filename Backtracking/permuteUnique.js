// function permuteUnique(nums) {
//   function find(arr, temp) {
//     if (arr.length === 0 && temp.length === nums.length) {
//       result[JSON.stringify(temp)] = true;
//       return;
//     }

//     for (let i = 0; i < arr.length; i++) {
//       const newArr = arr.filter((val, index) => index !== i);

//       find(newArr, [...temp, arr[i]]);
//     }
//   }

//   const result = {};

//   find([...nums], []);

//   return Object.keys(result).map((str) => JSON.parse(str));
// }

function permuteUnique(nums) {
  function remove(arr, j) {
    const temp = [];

    for (let i = 0; i < arr.length; i++) {
      if (i !== j) temp.push(arr[i]);
    }

    return temp;
  }

  function find(temp, arr) {
    if (temp.length === n && arr.length === 0) {
      result[JSON.stringify(temp)] = true;
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      const newArr = remove(arr, i);

      find([...temp, num], newArr);
    }
  }

  const result = {};
  const n = nums.length;

  find([], nums);

  return Object.keys(result).map((str) => JSON.parse(str));
}
