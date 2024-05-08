// Redo done
class TreeNode {
  constructor() {
    this.val = 0;
    this.isLeaf = false;
    this.topLeft = null;
    this.topRight = null;
    this.bottomLeft = null;
    this.bottomRight = null;
  }
}

function construct(grid) {
  function find(rowStart, rowEnd, colStart, colEnd) {
    if (rowStart > rowEnd || colStart > colEnd) return null;

    const total = (rowEnd - rowStart + 1) * (colEnd - colStart + 1);
    let ones = 0;

    for (let i = rowStart; i <= rowEnd; i++) {
      for (let j = colStart; j <= colEnd; j++) {
        if (grid[i][j] === 1) ones++;
      }
    }

    const node = new TreeNode();
    if (total === ones) {
      node.val = 1;
      node.isLeaf = true;
      return node;
    } else if (ones === 0) {
      node.val = 0;
      node.isLeaf = true;
      return node;
    } else {
      const rowHalf = Math.floor((rowStart + rowEnd) / 2);
      const colHalf = Math.floor((colStart + colEnd) / 2);

      node.val = 0;
      node.isLeaf = false;
      node.topLeft = find(rowStart, rowHalf, colStart, colHalf);
      node.topRight = find(rowStart, rowHalf, colHalf + 1, colEnd);
      node.bottomLeft = find(rowHalf + 1, rowEnd, colStart, colHalf);
      node.bottomRight = find(rowHalf + 1, rowEnd, colHalf + 1, colEnd);

      return node;
    }
  }

  const n = grid[0].length;

  return find(0, n - 1, 0, n - 1);
}
