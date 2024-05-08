function hasPathSum(root, targetSum) {
  function find(node, sum) {
    if (!node) return;

    const temp = sum - node.val;
    if (temp === 0 && !node.left && !node.right) result = true;

    find(node.left, temp);
    find(node.right, temp);
  }

  let result = false;
  find(root, targetSum);

  return result;
}
