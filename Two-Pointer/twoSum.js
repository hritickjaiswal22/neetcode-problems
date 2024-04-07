function twoSum(numbers, target) {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    const temp = numbers[i] + numbers[j];
    if (temp === target) return [i + 1, j + 1];
    else if (temp > target) j--;
    else i++;
  }

  return [1, 1];
}
