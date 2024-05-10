// function subsets(nums) {
//   function find(i, temp, result) {
//     if (i >= nums.length) {
//       result.push(temp);
//       return;
//     }

//     find(i + 1, temp, result);
//     find(i + 1, [...temp, nums[i]], result);
//   }

//   const result = [];

//   find(0, [], result);

//   return result;
// }

function subsets(nums) {
  function find(arr, temp) {
    if (arr.length === 0) {
      result.push(temp);
      return;
    }

    const num = arr.shift();

    find([...arr], temp);
    find([...arr], [...temp, num]);
  }

  const result = [];

  find([...nums], []);

  return result;
}
