// function convertBST(root) {
//   function find(node, val) {
//     if (!node) return val;

//     const right = find(node.right, val);
//     const currentVal = right + node.val;
//     node.val = currentVal;
//     const left = find(node.left, currentVal);

//     return left;
//   }

//   find(root, 0);

//   return root;
// }

function convertBST(root) {
  function find(node, sum) {
    if (!node) return sum;

    const rightSum = find(node.right, sum);
    const temp = rightSum + node.val;
    node.val = temp;
    const leftSum = find(node.left, temp);

    return leftSum;
  }

  find(root, 0);

  return root;
}
