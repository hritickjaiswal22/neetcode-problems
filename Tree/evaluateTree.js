function evaluateTree(root) {
  function find(node) {
    if (!node.left && !node.right) return !!node.val;

    if (node.val === 2) return find(node.left) | find(node.right);
    return find(node.left) & find(node.right);
  }

  return find(root);
}
