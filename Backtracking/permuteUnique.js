function permuteUnique(nums) {
  function find(arr, temp) {
    if (arr.length === 0 && temp.length === nums.length) {
      result[JSON.stringify(temp)] = true;
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const newArr = arr.filter((val, index) => index !== i);

      find(newArr, [...temp, arr[i]]);
    }
  }

  const result = {};

  find([...nums], []);

  return Object.keys(result).map((str) => JSON.parse(str));
}
