function nextGreaterElement(nums1, nums2) {
  const hash = {};
  const indices = nextGreaterIndices(nums2);
  const result = [];

  for (let i = 0; i < nums2.length; i++) {
    hash[nums2[i]] = i;
  }

  for (const num of nums1) {
    if (indices[hash[num]] >= 0) result.push(nums2[indices[hash[num]]]);
    else result.push(-1);
  }

  return result;
}

function nextGreaterIndices(arr) {
  const result = Array(arr.length).fill(-1);
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      const index = stack.pop();

      result[index] = i;
    }

    stack.push(i);
  }

  return result;
}

console.log(nextGreaterIndices([13, 8, 1, 5, 2, 5, 9, 7, 6, 12]));
