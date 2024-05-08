// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// function sortedArrayToBST(nums) {
//   function find(low, high) {
//     if (high < low) return null;
//     if (low === high) return new TreeNode(nums[low]);

//     const mid = low + Math.floor((high - low) / 2);

//     const node = new TreeNode(nums[mid]);

//     node.left = find(low, mid - 1);
//     node.right = find(mid + 1, high);

//     return node;
//   }

//   return find(0, nums.length - 1);
// }

function sortedArrayToBST(nums) {
  function find(low, high) {
    if (low === high) return new TreeNode(nums[low]);
    if (low > high) return null;

    const mid = low + Math.floor((high - low) / 2);

    const newNode = new TreeNode(nums[mid]);

    newNode.left = find(low, mid - 1);
    newNode.right = find(mid + 1, high);

    return newNode;
  }

  return find(0, nums.length - 1);
}
