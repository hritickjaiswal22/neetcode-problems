function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);

  return nums;
}

function quickSort(nums, low, high) {
  if (low >= high) return;

  const pi = findPivot(nums, low, high);

  quickSort(nums, low, pi - 1);
  quickSort(nums, pi + 1, high);
}

function findPivot(nums, low, high) {
  const pivot = nums[high];
  let pi = low;

  for (let i = low; i <= high; i++) {
    if (nums[i] <= pivot) {
      swap(nums, pi, i);
      pi++;
    }
  }

  swap(nums, high, pi);

  return pi;
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
