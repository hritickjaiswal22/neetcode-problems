// function lowestCommonAncestor(root, p, q) {
//   function find(node, p, q) {
//     if (!node)
//       return {
//         visited: false,
//         node: null,
//       };

//     const left = find(node.left, p, q);
//     const right = find(node.right, p, q);

//     if (node === p || node === q) {
//       if (left.visited || right.visited)
//         return {
//           visited: true,
//           node: node,
//         };

//       return {
//         visited: true,
//         node: null,
//       };
//     }

//     if (left.visited && right.visited)
//       return {
//         visited: true,
//         node: node,
//       };
//     else if (left.visited) return left;
//     else if (right.visited) return right;
//     else
//       return {
//         visited: false,
//         node: null,
//       };
//   }

//   return find(root, p, q).node;
// }

function lowestCommonAncestor(root, p, q) {
  function find(node, level) {
    if (!node) return false;

    const left = find(node.left, level + 1);
    const right = find(node.right, level + 1);

    if (((node === p || node === q) && (left || right)) || (left && right)) {
      if (level > resultLevel) {
        resultLevel = level;
        resultNode = node;
      }
    }

    if (node === p || node === q) return true;
    return left && right;
  }

  let resultLevel = -1;
  let resultNode = null;

  find(root, 0);

  return resultNode?.val;
}
