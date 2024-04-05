// function sortArray(nums) {
//   const first = nums.shift();
//   nums.push(first);
//   if (isSorted(nums)) return nums;

//   quickSort(0, nums.length - 1, nums);

//   return nums;
// }

// function quickSort(low, high, nums) {
//   if (low >= high) return;
//   const index = partition(low, high, nums[high], nums);
//   quickSort(low, index - 1, nums);
//   quickSort(index + 1, high, nums);
// }

// function partition(low, high, pivot, nums) {
//   let j = low;

//   for (let i = low; i <= high; i++) {
//     if (nums[i] < pivot) {
//       swap(i, j, nums);
//       j++;
//     }
//   }

//   swap(j, high, nums);

//   return j;
// }

// function swap(i, j, nums) {
//   const temp = nums[i];
//   nums[i] = nums[j];
//   nums[j] = temp;
// }

// function isSorted(nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] > nums[i + 1]) return false;
//   }

//   return true;
// }

// // Math.floor(Math.random() * (high - low + 1)) + low

function sortArray(nums) {
  // mergeSort(0, nums.length - 1, nums);
  // return nums;

  quickSort(0, nums.length - 1, nums);

  return nums;
}

// function mergeSort(low, high, nums) {
//   if (low >= high) return;

//   const mid = low + Math.floor((high - low) / 2);

//   mergeSort(low, mid, nums);
//   mergeSort(mid + 1, high, nums);
//   merge(low, mid, high, nums);
// }

// function merge(low, mid, high, nums) {
//   const left = [];
//   const right = [];
//   let i = 0;
//   let j = 0;
//   const result = [];

//   for (let i = low; i <= mid; i++) {
//     left.push(nums[i]);
//   }

//   for (let i = mid + 1; i <= high; i++) {
//     right.push(nums[i]);
//   }

//   while (i < left.length && j < right.length) {
//     if (left[i] <= right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }

//   while (i < left.length) {
//     result.push(left[i]);
//     i++;
//   }

//   while (j < right.length) {
//     result.push(right[j]);
//     j++;
//   }

//   for (let i = 0; i < result.length; i++) {
//     nums[low + i] = result[i];
//   }

//   return nums;
// }

function quickSort(low, high, nums) {
  if (low >= high) return;

  const pivot = nums[high];
  const mid = partition(low, high, pivot, nums);

  quickSort(low, mid - 1, nums);
  quickSort(mid + 1, high, nums);
}

function partition(low, high, pivot, nums) {
  let i = low;

  for (let j = low; j < high; j++) {
    if (nums[j] <= pivot) {
      swap(i, j, nums);
      i++;
    }
  }

  swap(i, high, nums);

  return i;
}

function swap(i, j, nums) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
