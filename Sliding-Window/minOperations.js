// function minOperations(nums, x) {
//   const n = nums.length;
//   const prefix = [];
//   let prefixSum = 0;
//   let postfixSum = 0;
//   let result = Number.MAX_SAFE_INTEGER;

//   for (const num of nums) {
//     prefixSum += num;
//     prefix.push(prefixSum);
//   }

//   if (prefix[n - 1] < x) return -1;
//   if (prefix[n - 1] === x) return n;
//   const temp = binarySearch(prefix, x);
//   if (temp >= 0) result = temp + 1;

//   for (let i = n - 1; i >= 0; i--) {
//     postfixSum += nums[i];
//     if (postfixSum > x) break;
//     else if (postfixSum === x) result = Math.min(result, n - i);
//     else {
//       const temp = binarySearch(prefix, x - postfixSum);
//       if (temp >= 0) {
//         result = Math.min(result, n - i + temp + 1);
//       }
//     }
//   }

//   if (result === Number.MAX_SAFE_INTEGER) return -1;
//   return result;
// }

// function binarySearch(arr, x) {
//   let start = 0,
//     end = arr.length - 1;

//   // Iterate while start not meets end
//   while (start <= end) {
//     // Find the mid index
//     let mid = Math.floor((start + end) / 2);

//     // If element is present at
//     // mid, return True
//     if (arr[mid] === x) return mid;
//     // Else look in left or
//     // right half accordingly
//     else if (arr[mid] < x) start = mid + 1;
//     else end = mid - 1;
//   }

//   return -1;
// }

function minOperations(nums, x) {
  const n = nums.length;
  const hash = {};
  let sum = 0;
  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    sum += nums[i];

    if (hash[sum] === undefined) hash[sum] = i;
    if (sum === x) result = Math.min(result, i + 1);
  }

  sum = 0;

  for (let i = n - 1; i >= 0; i--) {
    sum += nums[i];
    const diff = x - sum;

    if (hash[diff] !== undefined && hash[diff] < i)
      result = Math.min(result, hash[diff] + 1 + n - i);
    if (sum === x) result = Math.min(result, n - i);
  }

  if (result === Number.MAX_SAFE_INTEGER) return -1;
  return result;
}
