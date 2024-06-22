function removeLeafNodes(root, target) {
  function find(node, parent) {
    if (!node) return null;

    find(node.left, node);
    find(node.right, node);

    if (!node.left && !node.right && node.val === target) {
      if (parent && parent.left === node) {
        parent.left = null;
      }
      if (parent && parent.right === node) {
        parent.right = null;
      }
      return null;
    }
    return node;
  }

  return find(root, null);
}
