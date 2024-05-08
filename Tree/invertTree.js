function invertTree(root) {
  function find(node) {
    if (!node) return;

    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    find(node.left);
    find(node.right);
  }

  find(root);

  return root;
}
