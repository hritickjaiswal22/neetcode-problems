function bottomView(root) {
  function find(node, col, row) {
    if (!node) return;

    let obj = hash[col];

    if (!obj || row >= obj.row) {
      hash[col] = {
        row,
        val: node.data,
      };
    }

    find(node.left, col - 1, row + 1);
    find(node.right, col + 1, row + 1);
  }

  const hash = {};

  find(root, 0, 0);

  const keys = Object.keys(hash)
    .map((key) => Number(key))
    .sort((a, b) => a - b);
  const result = [];

  for (const key of keys) {
    result.push(hash[key].val);
  }

  return result;
}
