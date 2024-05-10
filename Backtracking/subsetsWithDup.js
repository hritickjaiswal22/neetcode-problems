// function subsetsWithDup(nums) {
//   function find(i, temp) {
//     if (i >= nums.length) {
//       hash[temp] = true;
//       return;
//     }

//     find(i + 1, [...temp, nums[i]]);
//     find(i + 1, temp);
//   }

//   const hash = {};

//   find(0, []);

//   return Object.keys(hash);
// }

function subsetsWithDup(nums) {
  function find(i, temp) {
    if (i >= nums.length) {
      result[JSON.stringify(temp)] = true;
      return;
    }

    find(i + 1, [...temp]);
    find(i + 1, [...temp, nums[i]]);
  }

  const result = {};

  nums.sort((a, b) => a - b);

  find(0, []);

  return Object.keys(result).map((str) => JSON.parse(str));
}
