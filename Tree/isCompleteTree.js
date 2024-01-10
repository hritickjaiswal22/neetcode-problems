function isCompleteTree(root) {
  const queue = [];
  let prevNull = false;

  queue.push(root);

  while (queue.length) {
    const node = queue.shift();

    if (node && prevNull) return false;
    if (!node) {
      prevNull = true;
      continue;
    }

    queue.push(node.left);
    queue.push(node.right);
  }

  return true;
}
