// function removeDuplicates(s, k) {
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     if (stack.length && getTop(stack) === s[i]) {
//       let j = i;
//       let count = 0;

//       while (j < s.length && s[j] === s[i]) {
//         j++;
//         count++;
//       }

//       while (stack.length && getTop(stack) === s[i]) {
//         count++;
//         stack.pop();
//       }

//       count = count % k;
//       while (count) {
//         count--;
//         stack.push(s[i]);
//       }
//       i = j - 1;
//     } else stack.push(s[i]);
//   }

//   return stack.join("");
// }

// function getTop(stack) {
//   return stack[stack.length - 1];
// }

function removeDuplicates(s, k) {
  const stack = [];
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let top = stack[stack.length - 1];

    if (top && top.char === s[i]) {
      top.freq++;
    } else {
      stack.push({
        char: s[i],
        freq: 1,
      });
    }

    top = stack[stack.length - 1];

    if (top.freq >= k) {
      top.freq = top.freq - k;
    }
    if (top.freq <= 0) stack.pop();
  }

  for (const obj of stack) {
    result += repeat(obj.char, obj.freq);
  }

  return result;
}

function repeat(char, num) {
  let temp = "";
  for (let i = 0; i < num; i++) {
    temp += char;
  }

  return temp;
}
