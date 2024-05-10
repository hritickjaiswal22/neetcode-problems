function canPartitionKSubsets(nums, k) {
  function remove(arr, j) {
    const temp = [];

    for (let i = 0; i < arr.length; i++) {
      if (i !== j) temp.push(arr[i]);
    }

    return temp;
  }

  function find(arr, temp, sum) {
    if (arr.length === 0 && temp === k) {
      result = true;
      return;
    }
    if (result || sum > requiredSubsetSum) return;

    for (let i = 0; i < arr.length; i++) {
      const val = sum + arr[i];

      if (val === requiredSubsetSum) {
        const newArr = remove(arr, i);
        find(newArr, temp + 1, 0);
      }
      if (val < requiredSubsetSum) {
        const newArr = remove(arr, i);
        find(newArr, temp, val);
      }
    }
  }

  let sum = 0;
  for (const num of nums) {
    sum += num;
  }

  if (sum % k !== 0) return false;
  const requiredSubsetSum = sum / k;
  let result = false;

  find(nums, 0, 0);

  return result;
}
