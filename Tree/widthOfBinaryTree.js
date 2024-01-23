// MLE

// function widthOfBinaryTree(root) {
//   const queue = [];
//   const result = [];
//   let i = 0;
//   let hasPrevRow = true;

//   result.push([root.val]);
//   queue.push(root);

//   while (i < queue.length) {
//     if (!hasPrevRow) break;

//     let j = i;
//     const len = queue.length;
//     const temp = [];
//     hasPrevRow = false;

//     for (j = i; j < len; j++) {
//       const node = queue[j];

//       if (node) {
//         hasPrevRow = true;
//         queue.push(node.left);
//         queue.push(node.right);

//         if (node.left !== null) temp.push(node.left.val);
//         else temp.push(null);

//         if (node.right !== null) temp.push(node.right.val);
//         else temp.push(null);
//       } else {
//         queue.push(null, null);
//         temp.push(null);
//         temp.push(null);
//       }
//     }

//     result.push(temp);
//     i = j;
//   }
//   result.pop();

//   let max = 1;

//   for (const arr of result) {
//     max = Math.max(max, calc(arr));
//   }

//   return max;
// }

// function calc(arr) {
//   let i = null;
//   let j = null;

//   for (let k = 0; k < arr.length; k++) {
//     const node = arr[k];

//     if (node !== null) {
//       i = k;
//       break;
//     }
//   }

//   for (let k = arr.length - 1; k >= 0; k--) {
//     const node = arr[k];

//     if (node !== null) {
//       j = k;
//       break;
//     }
//   }

//   if (i !== null && j !== null) return j - i + 1;

//   return -1;
// }
