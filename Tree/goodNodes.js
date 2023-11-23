function goodNodes(root) {
  function find(node, max) {
    if (!node) return 0;

    const left = find(node.left, Math.max(max, node.val));
    const right = find(node.right, Math.max(max, node.val));

    if (node.val >= max) return left + right + 1;
    return left + right;
  }

  return find(root, Number.MIN_SAFE_INTEGER);
}
