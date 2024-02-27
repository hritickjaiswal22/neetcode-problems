function minOperations(nums, x) {
  const n = nums.length;
  const prefix = [];
  let prefixSum = 0;
  let postfixSum = 0;
  let result = Number.MAX_SAFE_INTEGER;

  for (const num of nums) {
    prefixSum += num;
    prefix.push(prefixSum);
  }

  if (prefix[n - 1] < x) return -1;
  if (prefix[n - 1] === x) return n;
  const temp = binarySearch(prefix, x);
  if (temp >= 0) result = temp + 1;

  for (let i = n - 1; i >= 0; i--) {
    postfixSum += nums[i];
    if (postfixSum > x) break;
    else if (postfixSum === x) result = Math.min(result, n - i);
    else {
      const temp = binarySearch(prefix, x - postfixSum);
      if (temp >= 0) {
        result = Math.min(result, n - i + temp + 1);
      }
    }
  }

  if (result === Number.MAX_SAFE_INTEGER) return -1;
  return result;
}

function binarySearch(arr, x) {
  let start = 0,
    end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at
    // mid, return True
    if (arr[mid] === x) return mid;
    // Else look in left or
    // right half accordingly
    else if (arr[mid] < x) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
}
