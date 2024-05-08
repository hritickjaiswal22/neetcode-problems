function levelOrder(root) {
  const result = [];
  const queue = [];

  if (root) queue.push(root);

  while (queue.length > 0) {
    const nextLevel = [];
    const temp = [];

    while (queue.length) {
      const node = queue.shift();

      temp.push(node.val);
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }

    result.push(temp);
    queue.push(...nextLevel);
  }

  return result;
}
