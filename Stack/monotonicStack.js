// FOR FINDING GREATER ARRAY USE DECREASING STACK
// FOR FINDING SMALLER ARRAY USE INCREASING STACK
// USE "=" SIGN IN "while" LOOP WHEN EQUAL IS ASKED IN QUESTION

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

function previousGreaterIndices(arr) {
  arr.reverse();

  let prevGreaterArr = nextGreaterIndices(arr);
  prevGreaterArr.reverse();

  prevGreaterArr = prevGreaterArr.map((index) =>
    index !== null ? arr.length - 1 - index : index
  );

  return prevGreaterArr;
}

function getTop(stack) {
  return stack[stack.length - 1];
}

console.log(previousGreaterIndices([13, 8, 1, 5, 2, 5, 9, 7, 6, 12]));
