function permute(nums) {
  function find(arr, temp) {
    if (arr.length === 0 && temp.length === nums.length) {
      result.push(temp);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const newArr = arr.filter((val, index) => index !== i);

      find(newArr, [...temp, arr[i]]);
    }
  }

  const result = [];

  find([...nums], []);

  return result;
}
