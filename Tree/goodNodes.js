// function goodNodes(root) {
//   function find(node, max) {
//     if (!node) return 0;

//     const left = find(node.left, Math.max(max, node.val));
//     const right = find(node.right, Math.max(max, node.val));

//     if (node.val >= max) return left + right + 1;
//     return left + right;
//   }

//   return find(root, Number.MIN_SAFE_INTEGER);
// }

function goodNodes(root) {
  function find(node, max) {
    if (!node) return 0;

    let result = 0;
    if (node.val >= max) {
      result = 1;
      max = node.val;
    }
    result += find(node.left, max);
    result += find(node.right, max);

    return result;
  }

  return find(root, Number.MIN_SAFE_INTEGER);
}
