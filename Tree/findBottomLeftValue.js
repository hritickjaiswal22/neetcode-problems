// function findBottomLeftValue(root) {
//   function find(node, x, y) {
//     let returnedNode = {
//       val: node.val,
//       x,
//       y,
//     };

//     if (node.left) returnedNode = find(node.left, x - 1, y + 1);
//     if (node.right) {
//       const rightNode = find(node.right, x + 1, y + 1);

//       if (rightNode.y > returnedNode.y) returnedNode = rightNode;
//       else if (rightNode.y === returnedNode.y) {
//         if (returnedNode.x > rightNode.x) returnedNode = rightNode;
//       }
//     }

//     return returnedNode;
//   }

//   return find(root, 0, 0).val;
// }

function findBottomLeftValue(root) {
  function find(node, level) {
    if (!node) return;

    if (level > lowestLevel) {
      lowestLevel = level;
      result = node.val;
    }

    find(node.left, level + 1);
    find(node.right, level + 1);
  }

  let result = -1;
  let lowestLevel = -1;

  find(root, 0);

  return result;
}
