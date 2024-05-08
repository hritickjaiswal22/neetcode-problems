function preorderTraversal(root) {
  function find(node) {
    if (!node) return;

    result.push(node.val);
    find(node.left);
    find(node.right);
  }

  const result = [];

  find(root);

  return result;
}
