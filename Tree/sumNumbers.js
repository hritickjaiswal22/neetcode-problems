// function sumNumbers(root) {
//   function find(node, num) {
//     num = num * 10 + node.val;

//     if (!node.left && !node.right) return num;

//     let left = 0;
//     let right = 0;

//     if (node.left) left = find(node.left, num);
//     if (node.right) right = find(node.right, num);

//     return left + right;
//   }

//   return find(root, 0);
// }

function sumNumbers(root) {
  function find(node, sum) {
    if (!node) return;

    const temp = sum * 10 + node.val;
    if (!node.left && !node.right) result += temp;

    find(node.left, temp);
    find(node.right, temp);
  }

  let result = 0;

  find(root, 0);

  return result;
}
