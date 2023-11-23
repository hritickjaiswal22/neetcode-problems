function diameterOfBinaryTree(root) {
  function find(node) {
    if (!node) return 0;

    const left = find(node.left);
    const right = find(node.right);

    result = Math.max(result, left + right);

    return Math.max(left, right) + 1;
  }

  let result = Number.MIN_SAFE_INTEGER;

  find(root);

  return result;
}
