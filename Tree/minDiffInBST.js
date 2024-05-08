// function minDiffInBST(root) {
//   function find(node) {
//     if (!node.left && !node.right)
//       return {
//         max: node.val,
//         min: node.val,
//       };

//     let leftNode = null;
//     let rightNode = null;

//     if (node.left) leftNode = find(node.left);
//     if (node.right) rightNode = find(node.right);

//     if (leftNode) result = Math.min(result, node.val - leftNode.max);
//     if (rightNode) result = Math.min(result, rightNode.min - node.val);

//     return {
//       max: Math.max(
//         node.val,
//         rightNode ? rightNode.max : Number.MIN_SAFE_INTEGER
//       ),
//       min: Math.min(
//         node.val,
//         leftNode ? leftNode.min : Number.MAX_SAFE_INTEGER
//       ),
//     };
//   }

//   let result = Number.MAX_SAFE_INTEGER;

//   find(root);

//   return result;
// }

function minDiffInBST(root) {
  function find(node) {
    if (!node.left && !node.right)
      return {
        min: node.val,
        max: node.val,
      };

    let leftObj = null;
    let rightObj = null;
    let max = node.val;
    let min = node.val;

    if (node.left) leftObj = find(node.left);
    if (node.right) rightObj = find(node.right);

    if (leftObj) {
      result = Math.min(result, node.val - leftObj.max);
      min = leftObj.min;
    }
    if (rightObj) {
      result = Math.min(result, rightObj.min - node.val);
      max = rightObj.max;
    }

    return { min, max };
  }

  let result = Number.MAX_SAFE_INTEGER;

  find(root);

  return result;
}
