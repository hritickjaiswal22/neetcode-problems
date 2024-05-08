function mergeTrees(root1, root2) {
  function find(node1, node2) {
    if (!node1 && !node2) return null;

    let value = node1 ? node1.val : 0;
    value += node2 ? node2.val : 0;

    const newNode = new TreeNode(value);
    newNode.left = find(node1 ? node1.left : null, node2 ? node2.left : null);
    newNode.right = find(
      node1 ? node1.right : null,
      node2 ? node2.right : null
    );

    return newNode;
  }

  return find(root1, root2);
}
