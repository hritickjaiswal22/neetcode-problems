function connect(root) {
  function find(node, next) {
    if (!node) return;

    node.next = next;

    find(node.left, node.right);
    find(node.right, next ? next.left : null);
  }

  find(root, null);
}
