// function isValidBST(root) {
//   function find(node) {
//     if (!node.left && !node.right)
//       return {
//         max: node.val,
//         min: node.val,
//       };

//     let left = null;
//     let right = null;

//     if (node.left) left = find(node.left);
//     if (node.right) right = find(node.right);

//     if (left && left.max >= node.val) result = false;
//     if (right && right.min <= node.val) result = false;

//     return {
//       max: Math.max(node.val, right ? right.max : Number.MIN_SAFE_INTEGER),
//       min: Math.min(node.val, left ? left.min : Number.MAX_SAFE_INTEGER),
//     };
//   }

//   let result = true;

//   find(root);

//   return result;
// }

function isValidBST(root) {
  function find(node) {
    if (!node)
      return {
        max: Number.MIN_SAFE_INTEGER,
        min: Number.MAX_SAFE_INTEGER,
      };

    const left = find(node.left);
    const right = find(node.right);

    if (node.val <= left.max) result = false;
    if (node.val >= right.min) result = false;

    return {
      max: Math.max(node.val, right.max),
      min: Math.min(node.val, left.min),
    };
  }

  let result = true;

  find(root);

  return result;
}
