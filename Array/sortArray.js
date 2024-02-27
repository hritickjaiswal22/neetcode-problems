function sortArray(nums) {
  const first = nums.shift();
  nums.push(first);
  if (isSorted(nums)) return nums;

  quickSort(0, nums.length - 1, nums);

  return nums;
}

function quickSort(low, high, nums) {
  if (low >= high) return;
  const index = partition(low, high, nums[high], nums);
  quickSort(low, index - 1, nums);
  quickSort(index + 1, high, nums);
}

function partition(low, high, pivot, nums) {
  let j = low;

  for (let i = low; i <= high; i++) {
    if (nums[i] < pivot) {
      swap(i, j, nums);
      j++;
    }
  }

  swap(j, high, nums);

  return j;
}

function swap(i, j, nums) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function isSorted(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) return false;
  }

  return true;
}

// Math.floor(Math.random() * (high - low + 1)) + low
