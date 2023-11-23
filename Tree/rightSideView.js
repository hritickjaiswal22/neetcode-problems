function rightSideView(root) {
  function find(node, x, y) {
    if (!node) return;

    if (!hash[y]) {
      hash[y] = {
        x,
        val: node.val,
      };
    } else {
      hash[y] = {
        x,
        val: node.val,
      };
    }

    find(node.left, x - 1, y + 1);
    find(node.right, x + 1, y + 1);
  }

  const hash = {};

  find(root, 0, 0);

  return Object.values(hash).map((obj) => obj.val);
}
