// function maxDepth(root) {
//   if (!root) return 0;

//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// }

function maxDepth(root) {
  function find(node) {
    if (!node) return 0;

    return 1 + Math.max(find(node.left), find(node.right));
  }

  return find(root);
}
