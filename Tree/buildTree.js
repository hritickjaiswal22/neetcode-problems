class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function buildTree(preorder, inorder) {
  function find(i, left, right) {
    if (i >= preorder.length) return null;
    if (right < left) return null;

    const index = inorder.findIndex((val) => val === preorder[i]);

    const node = new TreeNode(preorder[i]);

    node.left = find(i + 1, left, index - 1);
    node.right = find(i + 2, index + 1, right);

    return node;
  }

  return find(0, 0, preorder.length - 1);
}
