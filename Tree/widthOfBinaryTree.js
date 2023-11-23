function widthOfBinaryTree(root) {
  const queue = [];
  let result = 0;

  while (queue.length) {
    const temp = [];

    while (queue.length) {
      const node = queue.shift();

      if (node) {
        temp.push(node.left);
        temp.push(node.right);
      } else temp.push(null, null);
    }

    result = Math.max(result, calcWidth(temp));
    const truth = temp.findIndex((node) => node !== null);

    if (truth === -1) break;
    else queue.push(...temp);
  }

  return result;
}

function calcWidth(arr) {
  let i = 0;
  let j = -1;

  for (let k = 0; k < arr.length; k++) {
    if (arr[k]) {
      i = k;
      break;
    }
  }

  for (let k = arr.length - 1; k >= 0; k--) {
    if (arr[k]) {
      j = k;
      break;
    }
  }

  return j - i + 1;
}
