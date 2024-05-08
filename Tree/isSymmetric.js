function isSymmetric(root) {
  function find(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    if (node1.val !== node2.val) return false;

    const left = find(node1.left, node2.right);
    const right = find(node1.right, node2.left);

    return left && right;
  }

  return find(root.left, root.right);
}
