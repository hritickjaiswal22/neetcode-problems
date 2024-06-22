function rangeSumBST(root, low, high) {
  function find(node) {
    if (!node) return 0;

    let sum = 0;
    if (node.val >= low && node.val <= high) sum += node.val;

    sum += find(node.left);
    sum += find(node.right);

    return sum;
  }

  return find(root);
}
