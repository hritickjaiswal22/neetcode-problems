function inorderTraversal(root) {
  function find(node) {
    if (!node) return;

    find(node.left);
    result.push(node.val);
    find(node.right);
  }

  const result = [];

  find(root);

  return result;
}
