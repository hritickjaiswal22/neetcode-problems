function largestValues(root) {
  const result = [];
  const queue = [];

  queue.push(root);
  result.push(root.val);

  while (queue.length > 0) {
    const temp = [];
    let max = Number.MIN_SAFE_INTEGER;

    while (queue.length > 0) {
      const node = queue.shift();

      if (node.left) {
        max = Math.max(max, node.left.val);
        temp.push(node.left);
      }
      if (node.right) {
        max = Math.max(max, node.right.val);
        temp.push(node.right);
      }
    }

    result.push(max);
    queue.push(...temp);
  }

  return result;
}
