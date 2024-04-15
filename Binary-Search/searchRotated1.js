// function search(nums, target) {
//   let low = 0;
//   let high = nums.length - 1;

//   while (low <= high) {
//     const mid = low + Math.floor((high - low) / 2);

//     if (nums[mid] === target) return mid;
//     else if (nums[mid] >= nums[low]) {
//       if (target >= nums[low] && target <= nums[mid]) high = mid - 1;
//       else low = mid + 1;
//     } else {
//       if (target > nums[mid] && target <= nums[high]) low = mid + 1;
//       else high = mid - 1;
//     }
//   }

//   return -1;
// }

function search(nums, target) {
  const n = nums.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] > nums[low]) {
      if (target >= nums[low] && target <= nums[mid]) high = mid - 1;
      else low = mid + 1;
    } else {
      if (target >= nums[mid] && target <= nums[high]) low = mid + 1;
      else high = mid - 1;
    }
  }

  return -1;
}
