function isBalanced(root) {
  function find(node) {
    if (!node) return 0;
    if (!result) return;

    const left = find(node.left);
    const right = find(node.right);
    const truth = Math.abs(left - right) > 1 ? false : true;

    result = result & truth;

    return 1 + Math.max(left, right);
  }

  let result = true;

  find(root);

  return result;
}
