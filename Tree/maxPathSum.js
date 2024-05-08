function maxPathSum(root) {
  function find(node) {
    if (!node)
      return {
        sum: 0,
        max: Number.MIN_SAFE_INTEGER,
      };

    const left = find(node.left);
    const right = find(node.right);

    return {
      max: Math.max(
        node.val,
        left.max,
        right.max,
        left.max + node.val,
        right.max + node.val,
        left.max + right.max + node.val
      ),
      sum: left.sum + right.sum + node.val,
    };
  }

  return find(root).max;
}
