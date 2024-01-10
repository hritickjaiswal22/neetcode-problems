function trimBST(root, low, high) {
  function insert(node, targetNode) {
    if (!node) return;

    if (targetNode.val < node.val) {
      if (!node.left) {
        node.left = targetNode;
        return;
      } else insert(node.left, targetNode);
    } else {
      if (!node.right) {
        node.right = targetNode;
        return;
      } else insert(node.right, targetNode);
    }
  }

  function find(node) {
    if (!node) return null;

    const left = find(node.left);
    const right = find(node.right);

    if (node.val >= low && node.val <= high) {
      node.left = left;
      node.right = right;
      return node;
    }

    if (!left && !right) return null;
    else if (!left || !right) return left || right;
    else {
      if (!left.right) {
        left.right = right;
        return left;
      }
      insert(left.right, right);

      return left;
    }
  }

  return find(root);
}
