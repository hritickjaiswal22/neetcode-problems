// function isCompleteTree(root) {
//   const queue = [];
//   let prevNull = false;

//   queue.push(root);

//   while (queue.length) {
//     const node = queue.shift();

//     if (node && prevNull) return false;
//     if (!node) {
//       prevNull = true;
//       continue;
//     }

//     queue.push(node.left);
//     queue.push(node.right);
//   }

//   return true;
// }

function isCompleteTree(root) {
  let level = 0;
  let levelNotFilledCompletely = false;
  const queue = [];

  queue.push([root]);

  while (queue.length) {
    if (levelNotFilledCompletely) return false;
    const arr = queue.shift();

    if (arr.length !== 2 ** level) levelNotFilledCompletely = true;

    const temp = [];

    for (let i = 0; i < arr.length; i++) {
      const node = arr[i];

      if (!node.left && !node.right) {
        if (i + 1 < arr.length) {
          if (arr[i + 1].left || arr[i + 1].right) return false;
        }
      }
      if (node.right && !node.left) return false;
      if (node.left && !node.right) {
        if (i + 1 < arr.length) {
          if (arr[i + 1].left || arr[i + 1].right) return false;
        }
      }

      if (node.left) temp.push(node.left);
      if (node.right) temp.push(node.right);
    }

    level++;
    if (temp.length) queue.push(temp);
  }

  return true;
}
