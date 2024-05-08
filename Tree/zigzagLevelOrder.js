// function zigzagLevelOrder(root) {
//   const result = [];
//   const queue = [];
//   let level = 0;

//   queue.push(root);
//   result.push([root.val]);
//   level++;

//   while (queue.length) {
//     const temp = [];

//     while (queue.length) {
//       const node = queue.shift();
//       if (node.left) temp.push(node.left);
//       if (node.right) temp.push(node.right);
//     }

//     const arr = [];

//     if (level & 1) {
//       for (let i = temp.length - 1; i >= 0; i--) {
//         arr.push(temp[i].val);
//       }
//     } else {
//       for (let i = 0; i < temp.length; i++) {
//         arr.push(temp[i].val);
//       }
//     }

//     if (arr.length) result.push(arr);
//     level++;
//     queue.push(...temp);
//   }

//   return result;
// }

function zigzagLevelOrder(root) {
  const result = [];
  const queue = [];
  let level = 0;

  if (root) queue.push(root);

  while (queue.length > 0) {
    const nextLevel = [];
    const temp = [];

    while (queue.length) {
      const node = queue.shift();

      temp.push(node.val);
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }

    if (level % 2 === 0) result.push(temp);
    else result.push(temp.reverse());
    queue.push(...nextLevel);
    level++;
  }

  return result;
}
