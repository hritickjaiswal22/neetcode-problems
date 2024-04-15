// // LOOKED AT SOLUTION
// // THIS WAS A HARD PROBLEM

// function search(nums, target) {
//   let low = 0;
//   let high = nums.length - 1;

//   while (low <= high) {
//     const mid = low + Math.floor((high - low) / 2);

//     if (nums[mid] === target) return mid;
//     else if (nums[mid] === nums[low]) low++; // THE ENTIRE PROBLEM SOLN
//     else if (nums[mid] > nums[low]) {
//       if (target >= nums[low] && target < nums[mid]) high = mid - 1;
//       else low = mid + 1;
//     } else {
//       if (target > nums[mid] && target <= nums[high]) low = mid + 1;
//       else high = mid - 1;
//     }
//   }

//   return -1;
// }

// https://www.youtube.com/watch?v=w2G2W8l__pc&t=27s

function search(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target) return true;

    if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
      low++;
      high--;
      continue;
    }

    if (nums[mid] >= nums[low]) {
      if (target >= nums[low] && target <= nums[mid]) high = mid - 1;
      else low = mid + 1;
    } else {
      if (target >= nums[mid] && target <= nums[high]) low = mid + 1;
      else high = mid - 1;
    }
  }

  return false;
}
