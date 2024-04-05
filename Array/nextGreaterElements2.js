function nextGreaterElements(nums) {
  const n = nums.length;
  const result = [];
  const nextGreater = nextGreaterIndices([...nums, ...nums]);

  for (let i = 0; i < n; i++) {
    const tempIndex = nextGreater[i];
    if (tempIndex !== null) {
      if (tempIndex < n) result.push(nums[tempIndex]);
      else result.push(nums[tempIndex - n]);
    } else result.push(-1);
  }

  return result;
}

function nextGreaterIndices(arr) {
  const stack = [];
  const result = Array(arr.length).fill(null);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      const index = stack.pop();

      result[index] = i;
    }

    stack.push(i);
  }

  return result;
}
