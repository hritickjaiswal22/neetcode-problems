// function permute(nums) {
//   function find(arr, temp) {
//     if (arr.length === 0 && temp.length === nums.length) {
//       result.push(temp);
//       return;
//     }

//     for (let i = 0; i < arr.length; i++) {
//       const newArr = arr.filter((val, index) => index !== i);

//       find(newArr, [...temp, arr[i]]);
//     }
//   }

//   const result = [];

//   find([...nums], []);

//   return result;
// }

function permute(nums) {
  function remove(arr, j) {
    const temp = [];

    for (let i = 0; i < arr.length; i++) {
      if (i !== j) temp.push(arr[i]);
    }

    return temp;
  }

  function find(arr, temp) {
    if (temp.length === n && arr.length === 0) {
      result.push(temp);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      const newArr = remove(arr, i);

      find(newArr, [...temp, num]);
    }
  }

  const result = [];
  const n = nums.length;

  find(nums, []);

  return result;
}
