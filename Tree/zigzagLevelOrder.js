function zigzagLevelOrder(root) {
  const result = [];
  const queue = [];
  let level = 0;

  queue.push(root);
  result.push([root.val]);
  level++;

  while (queue.length) {
    const temp = [];

    while (queue.length) {
      const node = queue.shift();
      if (node.left) temp.push(node.left);
      if (node.right) temp.push(node.right);
    }

    const arr = [];

    if (level & 1) {
      for (let i = temp.length - 1; i >= 0; i--) {
        arr.push(temp[i].val);
      }
    } else {
      for (let i = 0; i < temp.length; i++) {
        arr.push(temp[i].val);
      }
    }

    if (arr.length) result.push(arr);
    level++;
    queue.push(...temp);
  }

  return result;
}
