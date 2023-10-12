// THE SOLUTION IS RIGHT BUUUUUTTTT
// WE CAN RECYCLE THE "pushed" ARRAY AND USE IT AS STACK INSTEAD OF CREATING NEW ONE
// https://leetcode.com/problems/validate-stack-sequences/solutions/1853250/java-c-space-complexity-going-from-o-n-o-1/

function validateStackSequences(pushed, popped) {
  const stack = [];
  let j = 0;

  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);
    while (
      j < popped.length &&
      stack.length &&
      stack[stack.length - 1] === popped[j]
    ) {
      stack.pop();
      j++;
    }
  }

  return !stack.length;
}

// AWESOME SOLUTION
function validateStackSequences(pushed, popped) {
  let j = -1;
  let k = 0;

  for (let i = 0; i < pushed.length; i++) {
    j++;
    pushed[j] = pushed[i];

    while (j >= 0 && k < popped.length && pushed[j] === popped[k]) {
      j--;
      k++;
    }
  }

  return j < 0;
}
