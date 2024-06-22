function isEvenOddTree(root) {
  const queue = [];
  let level = 0;

  if (!(root.val & 1)) return false;

  queue.push(root);

  while (queue.length > 0) {
    const temp = [];

    while (queue.length > 0) {
      const node = queue.shift();

      if (node.left) temp.push(node.left);
      if (node.right) temp.push(node.right);
    }

    level++;
    if (!checkLevel(level, temp)) return false;
    queue.push(...temp);
  }

  return true;
}

function checkLevel(level, nodeList) {
  const n = nodeList.length;

  if (level & 1) {
    for (let i = 0; i < n - 1; i++) {
      const val = nodeList[i].val;

      if (val & 1 || val <= nodeList[i + 1].val) return false;
    }
    if (nodeList[n - 1].val & 1) return false;

    return true;
  } else {
    for (let i = 0; i < n - 1; i++) {
      const val = nodeList[i].val;

      if (!(val & 1) || val >= nodeList[i + 1].val) return false;
    }
    if (!(nodeList[n - 1].val & 1)) return false;

    return true;
  }
}
