// function dailyTemperatures(temperatures) {
//   const result = nextGreaterIndices(temperatures);

//   for (let i = 0; i < result.length; i++) {
//     if (result[i] === null) result[i] = 0;
//     else result[i] = result[i] - i;
//   }

//   return result;
// }

// function nextGreaterIndices(arr) {
//   const stack = [];

//   const nextGreaterArr = Array(arr.length).fill(null);

//   for (let i = 0; i < arr.length; i++) {
//     while (stack.length && arr[getTop(stack)] < arr[i]) {
//       const index = stack.pop();
//       nextGreaterArr[index] = i;
//     }

//     stack.push(i);
//   }

//   return nextGreaterArr;
// }

// function getTop(stack) {
//   return stack[stack.length - 1];
// }

function dailyTemperatures(temperatures) {
  const nextGreaterArr = nextGreaterIndices(temperatures);
  const result = [];

  for (let i = 0; i < temperatures.length; i++) {
    const index = nextGreaterArr[i];
    if (index === -1) result.push(0);
    else result.push(index - i);
  }

  return result;
}

function nextGreaterIndices(arr) {
  const result = Array(arr.length).fill(-1);
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
      const index = stack.pop();

      result[index] = i;
    }

    stack.push(i);
  }

  return result;
}
