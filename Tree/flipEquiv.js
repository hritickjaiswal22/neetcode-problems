function flipEquiv(root1, root2) {
  function find(node1, node2) {
    if ((node1 && !node2) || (!node1 && node2)) return false;
    if (!node1) return true;
    if (node1.val !== node2.val || !result) return false;

    const temp1 =
      find(node1.left, node2.left) && find(node1.right, node2.right);

    const temp = node1.left;
    node1.left = node1.right;
    node1.right = temp;

    const temp2 =
      find(node1.left, node2.left) && find(node1.right, node2.right);

    if (!(temp1 || temp2)) {
      result = false;
      return;
    }
    return true;
  }

  let result = true;

  return find(root1, root2);
}
