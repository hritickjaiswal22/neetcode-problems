function verticalTraversal(root) {
  function find(node, col, row) {
    if (!node) return;

    arr.push({
      col,
      row,
      val: node.val,
    });

    find(node.left, col - 1, row + 1);
    find(node.right, col + 1, row + 1);
  }

  const arr = [];
  const result = [];

  find(root, 0, 0);
  arr.sort((a, b) => {
    if (a.col < b.col) return -100;
    else if (a.col > b.col) return 100;
    else if (a.row < b.row) return -100;
    else if (a.row > b.row) return 100;
    else {
      if (a.val <= b.val) return -100;
      return 100;
    }
  });

  for (let i = 0; i < arr.length; i++) {
    const { col } = arr[i];
    let j = i;
    const temp = [];

    while (j < arr.length && arr[j].col === col) {
      temp.push(arr[j].val);
      j++;
    }

    result.push(temp);
    i = j - 1;
  }

  return result;
}

// function verticalTraversal(root) {
//     function find(node, col) {
//       if (!node) return;

//       const arr = hash[col] ? hash[col] : [];
//       arr.push(node.val);
//       hash[col] = arr;

//       find(node.left, col - 1);
//       find(node.right, col + 1);
//     }

//     const hash = {};
//     const result = [];

//     find(root, 0);

//     const keys = Object.keys(hash)
//       .map((val) => Number(val))
//       .sort((a, b) => a - b);

//     for (const key of keys) {
//       result.push(hash[key]);
//     }

//     return result;
//   }
