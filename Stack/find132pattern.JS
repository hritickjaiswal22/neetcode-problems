// TRYAGAIN

function find132pattern(nums) {
  if (nums.length <= 2) return false;

  const prefix = [null];
  let minIndex = 0;
  const nextSmallerArr = nextSmallerIndices(nums);
  let rightSmallerMaxIndex = null;
  let rightMax = nums[nums.length - 1];

  for (let i = 1; i < nums.length; i++) {
    prefix.push(minIndex);

    if (nums[i] < nums[minIndex]) minIndex = i;
  }

  for (let i = nums.length - 1; i >= 1; i--) {
    if (
      nextSmallerArr[i] !== null &&
      (rightSmallerMaxIndex === null ||
        nums[nextSmallerArr[i]] > nums[rightSmallerMaxIndex])
    )
      rightSmallerMaxIndex = nextSmallerArr[i];

    if (
      (rightSmallerMaxIndex !== null &&
        nums[rightSmallerMaxIndex] > nums[prefix[i]] &&
        nums[i] > nums[prefix[i]]) ||
      (nums[i] > rightMax &&
        nums[i] > nums[prefix[i]] &&
        rightMax > nums[prefix[i]])
    )
      return true;

    if (nums[i] > rightMax) rightMax = nums[i];
  }

  return false;
}

function nextSmallerIndices(arr) {
  const stack = [];
  const nextSmallerArr = Array(arr.length).fill(null);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[getTop(stack)] > arr[i]) {
      const index = stack.pop();
      nextSmallerArr[index] = i;
    }

    stack.push(i);
  }

  return nextSmallerArr;
}

function getTop(stack) {
  return stack[stack.length - 1];
}

// 100 / 105 testcases passed
// [-2,1,2,-2,1,2]
