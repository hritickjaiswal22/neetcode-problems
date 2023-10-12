function dailyTemperatures(temperatures) {
  const result = nextGreaterIndices(temperatures);

  for (let i = 0; i < result.length; i++) {
    if (result[i] === null) result[i] = 0;
    else result[i] = result[i] - i;
  }

  return result;
}

function nextGreaterIndices(arr) {
  const stack = [];

  const nextGreaterArr = Array(arr.length).fill(null);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[getTop(stack)] < arr[i]) {
      const index = stack.pop();
      nextGreaterArr[index] = i;
    }

    stack.push(i);
  }

  return nextGreaterArr;
}

function getTop(stack) {
  return stack[stack.length - 1];
}
