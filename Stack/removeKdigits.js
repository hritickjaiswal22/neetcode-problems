function removeKdigits(num, k) {
  const arr = num.split("");
  const n = num.length;

  if (k >= n) return "0";

  for (let i = 0; i < n; i++) {
    arr[i] = Number(arr[i]);
  }

  const nextSmallerArr = nextSmallerIndices(arr);

  console.log(nextSmallerArr);
}

function nextSmallerIndices(arr) {
  const stack = [];
  const result = Array(arr.length).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      const index = stack.pop();

      result[index] = i;
    }

    stack.push(i);
  }

  return result;
}
