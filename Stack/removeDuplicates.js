function removeDuplicates(s, k) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length && getTop(stack) === s[i]) {
      let j = i;
      let count = 0;

      while (j < s.length && s[j] === s[i]) {
        j++;
        count++;
      }

      while (stack.length && getTop(stack) === s[i]) {
        count++;
        stack.pop();
      }

      count = count % k;
      while (count) {
        count--;
        stack.push(s[i]);
      }
      i = j - 1;
    } else stack.push(s[i]);
  }

  return stack.join("");
}

function getTop(stack) {
  return stack[stack.length - 1];
}
